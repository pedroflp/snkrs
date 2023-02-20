import CardProduct from "@/components/CardProduct";
import { Loading } from "@/components/Loading";
import { colors } from "@/constants/colors";
import { ProductsDocument, useProductsQuery } from "@/graphql/generated/grapgql";
import { BaseLayout } from "@/layout/BaseLayout";
import { ssrCache, uqrlClient } from "@/lib/urql";
import { HomeProps } from "@/pages/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ProductList } from "./home.styles";

const Index: React.FC<HomeProps> = () => {
  const [{ data, fetching }] = useProductsQuery({
    variables: { limit: 100 }
  });

  return (
    <BaseLayout>
      <Head><title>SNKRS</title></Head>
      {fetching && <Loading
        message="Carregando sneakers..."
        color={colors.grey[2]}
        style={{ margin: 'auto', width: '100%' }}
      />}
      {data?.products?.edges && (
        <ProductList>
          {data?.products?.edges.map((product) => {
            return (
              <CardProduct
                key={product.node.id}
                product={product.node}
              />
            )
          })}
        </ProductList>
      )}
    </BaseLayout>
  )
}

export const getServerSide: GetServerSideProps = async () => {
  await uqrlClient.query(ProductsDocument, { limit: 100 }).toPromise();
  
  return ({
    props: {
      urqlState: ssrCache.extractData()
    },
  })
}

export default Index;
