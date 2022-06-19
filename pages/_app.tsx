import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import {AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SizeObserver>
        <ScrollObserver>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
        </ScrollObserver>
      </SizeObserver>
    
  );
}

export default MyApp;
