import { Button } from "@/components/Button";
import { ProductDocument, useProductQuery } from "@/graphql/generated/grapgql";
import { BaseLayout } from "@/layout/BaseLayout";
import { client, ssrCache } from "@/lib/urql";
import { formatCurrency } from "@/utils/formatCurrency";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { Buttons, Category, Content, Description, DescriptionContainer, Footer, Header, Image, Media, MediaList, Name, Price, ProductInfo, SeeMoreDescription, Size, SizeList, SizeSelection, SizeTitle, Title } from "./styles";

const ProductScreen: React.FC<{ productId: string }> = ({ productId }) => {
  const [{ data }] = useProductQuery({
    variables: { id: productId }
  });

  const product = useMemo(() => data?.product, [data]);
  const [selectedSize, setSelectedSize] = useState<{
    id: string, name: string
  }>();
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!data) return <></>;
  
  return (
    <BaseLayout>
      <Head>
        <title>{product?.category?.name} - {product?.name}</title>
      </Head>
      <Content>
        <MediaList>
          {product?.media?.map(image => (
            <Media mainPreview={image.sortOrder === 0}>
              <Image src={image.url} />
            </Media>
          ))}
        </MediaList>
        <ProductInfo>
          <Header>
            <Title>
              <Category>{product?.category?.name}</Category>
              <Name>{product?.name}</Name>
            </Title>
            {!!product?.description && (
              <DescriptionContainer>
                <Description
                  showFull={showFullDescription}
                >
                  {product?.description}
                </Description>
                <SeeMoreDescription
                  showFull={showFullDescription}
                  onClick={() => setShowFullDescription(prev => !prev)}
                >
                  Ver {showFullDescription ? 'menos' : 'mais'}
                </SeeMoreDescription>
              </DescriptionContainer>
            )}
          </Header>

          <SizeSelection>
            <SizeTitle>Tamanhos</SizeTitle>
            <SizeList>
              {product?.variants?.map(size => (
                <Size
                  key={size.id}
                  onClick={() => setSelectedSize({
                    id: size.id,
                    name: size.name,
                  })}
                  selected={size.id === selectedSize?.id}
                >
                  {size.name}
                </Size>
              ))}
            </SizeList>
          </SizeSelection>
          
          <Footer>
            <Price>
              {formatCurrency(
                product?.defaultVariant?.pricing?.price?.gross.amount as number,
                product?.defaultVariant?.pricing?.price?.currency
              )}
            </Price>
            <Buttons>
              <Button style={{ width: '100%' }} theme="primary">
                Comprar
              </Button>
              <Button style={{ width: '100%' }} theme="outlined">
                Adicionar na bag
              </Button>
            </Buttons>
          </Footer>
        </ProductInfo>
      </Content>
    </BaseLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return ({
    paths: [],
    fallback: "blocking",
  })
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: productId } = params as { id: string };
  await client.query(ProductDocument, { id: productId }).toPromise();

  return ({
    props: {
      urqlState: ssrCache.extractData(),
      productId,
    },
    revalidate: 60*60*3 // 3h
  })
}
export default ProductScreen;
