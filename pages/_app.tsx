import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../src/utils/scroll-observer";
import SizeObserver from "../src/utils/size-observer";
import { Navbar } from "../components/";
import Head from "next/head";
import { Source_Sans_Pro } from "@next/font/google";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceSansPro.className}>
      <Head>
        <title>UNT Status</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      <SizeObserver>
        <ScrollObserver>
          <Navbar />
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
    </main>
  );
}

export default MyApp;
