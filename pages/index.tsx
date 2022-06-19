import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import Head from 'next/head'
import Masthead from '../components/mashead'
import AboutUs from '../components/aboutus'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import ContactForm from '../components/contact-form'
import Navbar from '../components/navbar'

// animate: defines animation
// initial: defines the inital state
// exit: defines animation when component exits
const easing = [.6, -.05, .01, .99]

const fadeInUp = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing,
    }
  }
}

const Home: NextPage = (initialData:any) => {

  return (
    <motion.div
    animate="animate" initial="inital"
    exit={{ opacity: 0 }}  >
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      <motion.div variants={fadeInUp} >
        <Navbar />
      </motion.div>
      <Masthead />
      <AboutUs />
      <Works />
      <Testimonials />
      <ContactForm />
      <Footer />
      
    </motion.div>
  )
}

export default Home
