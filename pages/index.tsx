import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Masthead from "../components/mashead";
import AboutUs from "../components/aboutus";
import Works from "../components/works";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import Navbar from "../components/navbar";

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

const Home: NextPage = () => {
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
        <Works /> 
        <Testimonials />
        <ContactForm />
        <Footer />
      </motion.div>
  );
};

export default Home;
