import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/mashead'
import AboutUs from '../components/aboutus'
import Works from '../components/works'
import Testimonials from '../components/testimonials'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>untStatus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Works />
      <Testimonials />
    </div>
  )
}

export default Home
