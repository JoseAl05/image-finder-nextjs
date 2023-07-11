import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { DehydratedState } from '@tanstack/react-query';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import { ThemeProvider } from "next-themes";



function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {

  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
