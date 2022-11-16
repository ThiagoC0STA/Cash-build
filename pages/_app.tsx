import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer, Header } from "../components/E__export";
import { GlobalContext } from "../contexts/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cash Building</title>
        <meta name="description" content="A melhor imobiliária da região" />
      </Head>

      <GlobalContext>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </GlobalContext>
    </>
  );
}
