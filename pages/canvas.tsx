import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";
import Head from "next/head";
import fetch from 'isomorphic-unfetch';
import dateFormat from 'dateformat';
import { HalfCircleSpinner } from 'react-epic-spinners';
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

const canvasPage = () => {
  // Stores and sets Data
  const [canvasStatus, setCanvasStatus] = useState();
  const [canvasIndicator, setCanvasIndicator] = useState();
  const [canvasDescription, setCanvasDescription] = useState();

  // Executes function when page loads
  useEffect( () => {
      const fetchData = async () => {
          // Fetches the info
          const res = await fetch("/api/canvasRequest", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
          });

          const canvasData = await res.json();
          setCanvasStatus(canvasData.pageUpdated);
          setCanvasIndicator(canvasData.statusIndicator);
          setCanvasDescription(canvasData.statusDescription)
      }
      fetchData();
  }, []);

  return (
    <motion.div variants={stagger}
    animate="animate" initial="inital"
    exit={{ opacity: 0 }}>
    <>
      <Navbar />
      <Head>
        <title>Canvas Status</title>
        <meta name="description" content="Made for the people, UNT." />
        <link rel="icon" href="/assets/logos/logo-100.svg" />
      </Head>
      {/* Work Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        {/* Work Left */}
        <motion.div variants={fadeInUp} className="bg-opacity-100 saturate-100 bg-pink-500
        flex flex-col items-center justify-center h-[30vh] lg:h-auto
        text-white text-4xl md:text-5xl font-semibold leading-10"
        >
          <span>
            <WorkLink  href="https://statushistory.instructure.com/unt.instructure.com">
                  Canvas
            </WorkLink>{" "}
            Integration
          </span>
        </motion.div> {/* Work Left */}
        {/* Work Right */}
        <div className="bg-white h-[70vh] lg:min-h-screen flex flex-1 lg:items-center text-center justify-center ">
          <motion.div variants={fadeInDown} className="text-2xl md:text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
            <div className="flex flex-1 justify-center pb-10 h-[100px]">
              <HalfCircleSpinner className="bg-gray-100" color="green"></HalfCircleSpinner>
            </div>
            <p>Status: {canvasDescription}</p>
            {dateFormat(canvasStatus, "dddd, mmmm dS, yyyy")}
          </motion.div>
        </div> {/* Work Right */}
      </div> {/* Work Container */}
    </>
    </motion.div>
  );
};

// Broken: Implement to change color on animation wheel
function customCssColor(status: any) {
  if(status == "none") {
    return "green"
  }
  else if(status == "minor") {
    return "orange"
  }
  else if(status == "danger") {
    return "red"
  }
  else { 
      return "purple"
  }
}

export default canvasPage;
