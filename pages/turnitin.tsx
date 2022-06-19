import React from "react";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";
import {motion} from 'framer-motion';

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
  return (
    <>
      <Navbar />
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
          <motion.div variants={fadeInDown} className="text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
          Turnitin Data coming soon...
          </motion.div>
        </div> {/* Work Right */}
      </motion.div> {/* Work Container */}
    </>
  );
};

export default turnitinPage;
