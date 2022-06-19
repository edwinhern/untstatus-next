import type { NextPage } from 'next'
import Head from 'next/head'
import Masthead from '../components/mashead'
import AboutUs from '../components/aboutus'
import Works from '../components/works'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import ContactForm from '../components/contact-form'
import Payment from '../components/payment'
import Navbar from '../components/navbar'
const Home: NextPage = (initialData:any) => {

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      <Navbar />
      <Masthead />
      <AboutUs />
      <Works />
      <Testimonials />
      <ContactForm />
      <Footer />
      
    </div>
  )
}

export default Home
