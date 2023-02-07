import { ApolloClient, InMemoryCache } from "@apollo/client";

const apollo = new ApolloClient({
  uri: 'https://snkrs.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
});

export default apollo;