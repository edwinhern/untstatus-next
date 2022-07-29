import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from 'react';
import Masthead from "../components/mashead";
const DynamicWorks = dynamic( () => import('../components/works'), { 
  suspense: true,
});
import AboutUs from "../components/aboutus";
import Works from "../components/works";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import Navbar from "../components/navbar";
import {
  getCanvasStatus,
  getRespondusStatus,
  getTurnitinStatus,
  getZoomStatus,
} from "../lib/requests";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Home: NextPage = (props) => {
  return (
      <motion.div animate="animate" initial="inital" exit={{ opacity: 0 }}>
        <Head>
          <title>Welcome</title>
          <meta name="description" content="Made for the people, UNT." />
          <link rel="icon" href="/assets/logos/logo-100.svg" />
        </Head>
        <motion.div variants={fadeInUp}>
          <Navbar />
        </motion.div>
        <Masthead />
        <AboutUs />
        <Suspense fallback={`Loading...`}>
        <DynamicWorks data={props} />
        </Suspense>
        <Testimonials />
        <ContactForm />
        <Footer />
      </motion.div>
  );
};

// Call API requests to receive the data
export async function getServerSideProps({req, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const canvasJson = getCanvasStatus();
  const respondusJson = getRespondusStatus();
  const turnitinJson = getTurnitinStatus();
  const zoomJson = getZoomStatus();

  return {
    props: {
      canvas: await canvasJson,
      respondus: await respondusJson,
      turnitin: await turnitinJson,
      zoom: await zoomJson,
    },
  };
}

export default Home;
