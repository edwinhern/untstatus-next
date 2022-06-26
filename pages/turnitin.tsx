import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";
import {motion} from 'framer-motion';
import Head from "next/head";
import dateFormat from "dateformat";
import { FingerprintSpinner, HalfCircleSpinner } from "react-epic-spinners";

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


const turnitinPage: React.FC = () => {
   // Stores and sets Data
   const [turnitinStatus, setTurnitinStatus] = useState();
   const [turnitinIndicator, setTurnitinIndicator] = useState();
   const [turnitinDescription, setTurnitinDescription] = useState();
 
   // Executes function when page loads
   useEffect( () => {
       const fetchData = async () => {
           // Fetches the info
           const res = await fetch("/api/turnitinRequest", {
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               },
           });
 
           const turnitin = await res.json();

           setTurnitinStatus(turnitin.pageUpdated);
           setTurnitinIndicator(turnitin.colorIndicator);
           setTurnitinDescription(turnitin.statusDescription)
       }
       fetchData();
   }, []);
   
  return (
    <>
      <Navbar />
      <Head>
        <title>Turnitin Status</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      {/* Work Container */}
      <motion.div 
      animate="animate" initial="inital"
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        {/* Work Left */}
        <motion.div variants={fadeInUp} className="bg-opacity-100 saturate-100 bg-purple-500
        flex flex-col items-center justify-center h-[30vh] lg:h-auto
        text-white text-4xl md:text-5xl font-semibold leading-10"
        >
           <span>
            <WorkLink  href="https://turnitin.statuspage.io/">
            Turnitin
            </WorkLink>{" "}
            Integration
          </span>
        </motion.div> {/* Work Left */}
        {/* Work Right */}
        <div className="bg-white h-[70vh] lg:min-h-screen flex flex-1 lg:items-center text-center justify-center ">
          <motion.div variants={fadeInDown} className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
            <div className="flex flex-1 justify-center mb-[40px] pb-10 h-[100px]">
              <FingerprintSpinner size={95} color={`${turnitinIndicator}`}></FingerprintSpinner>
            </div>
            <p>Status: {turnitinDescription}</p>
            {dateFormat(turnitinStatus, "dddd, mmmm dS, yyyy")}
          </motion.div>
        </div> {/* Work Right */}
      </motion.div> {/* Work Container */}
    </>
  );
};

export default turnitinPage;
