import { Button } from "@/components/Button";
import { Loading } from '@/components/Loading';
import { colors } from "@/constants/colors";
import { ProductDocument, useProductQuery } from "@/graphql/generated/grapgql";
import { BaseLayout } from "@/layout/BaseLayout";
import { client, ssrCache } from "@/lib/urql";
import { formatCurrency } from "@/utils/formatCurrency";
import { GetServerSideProps } from "next";
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

  return (
    <>
      <Head>
        <title>{`${product?.category?.name ?? ''} - ${product?.name ?? ''}`}</title>
      </Head>
      <BaseLayout>
        {!data
          ? <Loading
            message="Carregando sneaker..."
            color={colors.grey[1]}
            style={{ width: '100%'}}
          />
          : (
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
        )}
      </BaseLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id: productId } = params as { id: string };
  const { error } = await client.query(ProductDocument, { id: productId }).toPromise();
  
  if (!!error) return ({
    redirect: {
      destination: '/',
      permanent: false
    }
  })

  return ({
    props: {
      urqlState: ssrCache.extractData(),
      productId,
    },
  })
}
export default ProductScreen;
