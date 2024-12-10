import { MainHeader } from "@/components/main-header"
import { AppProps } from "next/app"



const Layout = (props: { children: React.ReactElement }) => {
    return (
      <>
        <MainHeader />
        <main>{props.children}</main>
      </>
    );
  };



function MyApp({ Component, pageProps }: AppProps) {

  return (
        <Layout>
            <Component {...pageProps} />
        </Layout>    
  )
}

export default MyApp