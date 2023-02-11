import CardProduct from "@/components/CardProduct";
import { ProductsDocument, useProductsQuery } from "@/graphql/generated/grapgql";
import { BaseLayout } from "@/layout/BaseLayout";
import { client, ssrCache } from "@/lib/urql";
import { HomeProps } from "@/pages/types";
import { GetServerSideProps } from "next";
import { ProductList } from "./styles";

const Index: React.FC<HomeProps> = () => {
  const [{ data }] = useProductsQuery({
    variables: { limit: 100 }
  });

  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}

export const getServerSide: GetServerSideProps = async () => {
  await client.query(ProductsDocument, { limit: 100 }).toPromise();
  
  return ({
    props: {
      urqlState: ssrCache.extractData()
    },
  })
}

export default Index;
