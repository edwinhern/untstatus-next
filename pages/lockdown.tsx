import React from "react";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";
import {motion} from 'framer-motion';
import Head from "next/head";
import { FingerprintSpinner } from "react-epic-spinners";
import dateFormat from "dateformat";
import customCss from "../lib/cssFunction";

const easing = [.6, -.05, .01, .99]

const fadeInUp = {
  inital: {
    y:100,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing,
    }
  }
}

const fadeInDown = {
  inital: {
    y:-100,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing,
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const lockdownPage = (props) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Lockdown Status</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      {/* Work Container */}
      <motion.div variants={stagger}
      animate="animate" initial="inital"
      exit={{ opacity: 0 }} 
      className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        {/* Work Left */}
        <motion.div variants={fadeInUp} className="bg-opacity-100 saturate-100 bg-green-500
        flex flex-col items-center justify-center h-[30vh] lg:h-auto
        text-white text-[34px] md:text-5xl font-semibold leading-10"
        >
          <span>
            <WorkLink  href="https://status.respondus.com/">
                  Lockdown
            </WorkLink>{" "}
            Integration
          </span>
        </motion.div> {/* Work Left */}
        {/* Work Right */}
        <div className="bg-white h-[70vh] lg:min-h-screen flex flex-1 lg:items-center text-center justify-center ">
          <motion.div variants={fadeInDown} className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
            <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
              <FingerprintSpinner size={95} color={`${props.respondusIndicator}`}></FingerprintSpinner>
            </div>
            <p>Status: {props.respondusDescription}</p>
            {dateFormat(props.respondusStatus, "dddd, mmmm dS, yyyy")}
          </motion.div>
        </div> {/* Work Right */}
      </motion.div> {/* Work Container */}
    </>
  );
};

// Use when calling hhtp request inside a page Ex: canvas.tsx
export async function getServerSideProps({req,res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  try { 
    let res = await fetch(`https://status.respondus.com/api/v2/status.json`);
    let data = await res.json();
    return { 
      props:{
        respondusStatus: data["page"].updated_at,
        respondusIndicator: customCss(data.status["indicator"]),
        respondusDescription: data.status["description"],
      }
     };
  } catch(err) { console.error(err) }
  
};

export default lockdownPage;
