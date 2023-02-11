import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isSeverSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isSeverSide });

const client = createClient({
  url: 'https://snkrs.saleor.cloud/graphql/',
  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange,
    ssrCache,
  ]
})

export { client, ssrCache };
