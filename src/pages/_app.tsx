import { MainHeader } from "@/components/main-header"
import { AppContext, AppInitialProps, AppProps } from "next/app"

import '@/styles/_global.css';
import { useState } from "react";
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";

const Layout = (props: { children: React.ReactElement }) => {
    return (
      <>
        <MainHeader />
        <main>{props.children}</main>
      </>
    );
  };

  interface HomePageProps{
    dehydratedState: DehydratedState,
    page: number,
  }


  const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps > = ({
    Component,
    pageProps,
  }: AppProps<HomePageProps>) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    );
  };

export default MyApp