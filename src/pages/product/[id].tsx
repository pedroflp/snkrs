import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { Loading } from '@/components/Loading';
import { colors } from "@/constants/colors";
import { ProductDocument, useProductQuery } from "@/graphql/generated/grapgql";
import { BaseLayout } from "@/layout/BaseLayout";
import { client, ssrCache } from "@/lib/urql";
import { formatCurrency } from "@/utils/formatCurrency";
import { BsBag } from '@react-icons/all-files/bs/BsBag';
import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { IShippingAddress, IShippingData, ShippingResponse } from "../api/shipping";
import { Buttons, Category, Content, Footer, Header, Image, Media, MediaList, Name, Price, ProductInfo, SectionTitle, SelectRadio, Shipping, ShippingDeliveryDate, ShippingInformations, ShippingList, ShippingMethodName, ShippingMethodPrice, ShippingSelect, ShippingSelectOptions, Size, SizeList, SizeSelection, Title } from "./styles";

const ProductScreen: React.FC<{ productId: string }> = ({ productId }) => {
  const [{ data, fetching }] = useProductQuery({
    variables: { id: productId }
  });

  const product = useMemo(() => data?.product, [data]);
  const [selectedSize, setSelectedSize] = useState<{
    id: string, name: string
  }>();

  const [shippingCEP, setShippingCEP] = useState('');
  const [isLoadingShippingRequest, setIsLoadingShippingRequest] = useState(false);
  const [calculateShippingError, setCalculateShippingError] = useState<string | null>();

  const [shippingAddress, setShippingAddress] = useState<IShippingAddress>();
  const [shippingServices, setShippingServices] = useState<IShippingData[]>([]);
  const [selectedShippingService, setSelectedShippingService] = useState<IShippingData>();

  const handleCalculateShipping = async (
    cep: string,
    productWeight?: number,
    price?: number,
  ) => {
    setIsLoadingShippingRequest(true);
    setCalculateShippingError(null);
    setShippingAddress(undefined);
    setShippingServices([]);
    setSelectedShippingService(undefined);

    try {
      const response = await fetch('/api/shipping', {
        method: 'POST',
        body: JSON.stringify({
          cep,
          productWeight,
          price
        })
      })
      const { data, error }: ShippingResponse = await response.json();
      
      if (response.status === 400)
        return setCalculateShippingError(error);
      
      if (response.status === 200) {
        setShippingAddress(data!?.address);
        setShippingServices(data!?.shipping);
      }

    } finally {
      setIsLoadingShippingRequest(false);
    }
  }

  return (
    <>
      <Head>
        <title>{product && `${product?.category?.name} - ${product?.name}`}</title>
      </Head>
      <BaseLayout>
        {fetching
          ? <Loading
            message="Carregando sneaker..."
            color={colors.grey[2]}
            style={{ width: '100%' }}
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
                  <Button theme="transparent">
                    <BsBag size={26} />
                  </Button>
                </Header>

                <SizeSelection>
                  <SectionTitle>Tamanhos</SectionTitle>
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
              
                <Price>
                  {formatCurrency(
                    product?.defaultVariant?.pricing?.price?.gross.amount as number,
                    product?.defaultVariant?.pricing?.price?.currency
                  )}
                </Price>
                <Footer>
                  <Buttons>
                    <Button
                      theme="primary"
                      style={{ width: '60%', height: 50 }}
                    >
                        Comprar
                    </Button>
                  </Buttons>

                  <Shipping>
                    <SectionTitle>Calcular envio</SectionTitle>
                    <InputField
                      placeholder="CEP"
                      value={shippingCEP}
                      maxLength={8}
                      isLoading={isLoadingShippingRequest}
                      error={calculateShippingError}
                      onChange={(value: string) => {
                        if (!!calculateShippingError) setCalculateShippingError(null);
                        
                        const cep = value.replace('-', '');
                        if (cep.length === 8) handleCalculateShipping(
                          cep,
                          product?.weight?.value,
                          product?.defaultVariant?.pricing?.price?.gross.amount
                        );

                        setShippingCEP(cep.replace(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/, "$1$2-$3"));
                      }}
                    />
                    
                    <ShippingList>
                      {shippingAddress && <SectionTitle style={{ fontSize: 10, color: colors.black }}>
                          Envios para {shippingAddress?.city} - {shippingAddress.state}
                        </SectionTitle>
                      }
                      <ShippingSelectOptions>
                        {shippingServices.map((service) => {
                          console.log(service.code, selectedShippingService?.code)
                          const isSelected = service.code === selectedShippingService?.code;
                          return (
                            <ShippingSelect
                              selected={isSelected}
                              onClick={() => setSelectedShippingService(service)}
                            >
                              <SelectRadio selected={isSelected} />
                              <ShippingInformations>
                                <ShippingMethodName>{service.name}</ShippingMethodName>
                                <ShippingDeliveryDate>Entrega em: {format(new Date(service.deliveryDate), 'dd/MM')}</ShippingDeliveryDate>
                                <ShippingMethodPrice>{formatCurrency(service.price, 'BRL')}</ShippingMethodPrice>
                              </ShippingInformations>
                            </ShippingSelect>
                          )
                        })}
                      </ShippingSelectOptions>
                    </ShippingList>
                  </Shipping>
                </Footer>
              </ProductInfo>
            </Content>
          )}
      </BaseLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return ({
    paths: [],
    fallback: 'blocking'
  });
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    revalidate: 60*60,
  })
}
export default ProductScreen;
