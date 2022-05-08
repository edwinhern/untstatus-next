import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/mashead'
import AboutUs from '../components/aboutus'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import ContactForm from '../components/contact-form'
// import SSRPage from '../components/requests'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>

      <Masthead />
      <AboutUs />
      <Works />
      <Testimonials />
      {/* <SSRPage /> */}
      <ContactForm />
      <Footer />
      
    </div>
  )
}

export default Home
