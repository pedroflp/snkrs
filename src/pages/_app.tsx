import { saleorClient } from '@/lib/saleor';
import { ssrCache, uqrlClient } from '@/lib/urql';
import { GlobalStyle } from '@/styles/globalStyles';
import { SaleorProvider } from '@saleor/sdk';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);

  return (
    <>
      <GlobalStyle />
      <SaleorProvider client={saleorClient}>
        <Provider value={uqrlClient}>
          <Component {...pageProps} />
        </Provider>
      </SaleorProvider>
        
    </>
  )
}
