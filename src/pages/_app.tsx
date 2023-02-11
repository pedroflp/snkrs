import { client, ssrCache } from '@/lib/urql';
import { GlobalStyle } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) ssrCache.restoreData(pageProps.urqlState);

  return (
    <>
      <GlobalStyle />
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
