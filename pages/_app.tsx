import ScrollObserver from "../src/utils/scroll-observer";
import { Navbar } from "../components/Layout/Navbar.Component";
import SizeObserver from "../src/utils/size-observer";
import { Source_Sans_Pro } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

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
          <Analytics />
        </ScrollObserver>
      </SizeObserver>
    </main>
  );
}

export default MyApp;
