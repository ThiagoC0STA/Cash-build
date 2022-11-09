import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/E__export";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodc Natural Produts</title>
        <meta
          name="description"
          content="RN the best natural products website"
        />
      </Head>

      <Header />

      <Component {...pageProps} />
    </>
  );
}
