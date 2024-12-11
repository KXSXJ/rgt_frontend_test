import { MainHeader } from "@/components/main-header"
import { AppContext, AppInitialProps, AppProps } from "next/app"

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextComponentType } from "next";
import '@/styles/_global.css';

const Layout = (props: { children: React.ReactElement }) => {
    return (
      <>
        <MainHeader />
        <main>{props.children}</main>
      </>
    );
  };
  


  const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps > = ({
    Component,
    pageProps,
  }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
      <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </QueryClientProvider>
    );
  };

export default MyApp