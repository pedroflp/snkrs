import CardProduct from "@/components/CardProduct";
import { GetProducts } from "@/services/queries/queryProducts";
import { GetServerSideProps } from "next";

const Home: React.FC<any> = ({ products }) => {
  return (
    <div>
      {products?.map((p: any) => {
        const product = p.node;
        return (
          <CardProduct
            key={product.id}
            image={product.media[0].url}
            label={product.category.name}
            name={product.name}
            price={product.defaultVariant.pricing.price}
          />
        )
      })}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await GetProducts();
  const products = data.products.edges;
  
  return ({
    props: {
      products,
    },
  })
}

export default Home;
