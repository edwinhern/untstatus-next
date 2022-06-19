import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import {WorkLink} from "../components/work";

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

const canvasPage: React.FC = () => {
  return (
    <motion.div variants={stagger}
    animate="animate" initial="inital"
    exit={{ opacity: 0 }}>
    <>
      <Navbar />
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
          {/* <span><a href="https://statushistory.instructure.com/unt.instructure.com" className="underline">Canvas</a> Integration</span> */}
        </motion.div> {/* Work Left */}
        {/* Work Right */}
        <div className="bg-white h-[70vh] lg:min-h-screen flex flex-1 lg:items-center text-center justify-center ">
          <motion.div variants={fadeInDown} className="text-3xl w-full max-w-md pt-10 lg:pt-0 px-0 md:px-0">
          Canvas Data coming soon...
          </motion.div>
        </div> {/* Work Right */}
      </div> {/* Work Container */}
    </>
    </motion.div>
  );
};

export default canvasPage;
