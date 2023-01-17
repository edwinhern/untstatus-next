import { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import { motion } from "framer-motion";
import style from "../styles/Masthead.module.css";
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  inital: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Masthead = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <motion.div
      variants={stagger}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      ref={refContainer}
      className="min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(=${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`${style.mastHeadBackground} absolute w-screen min-h-[90vh] md:h-screen object-cover saturate-100`}
      />

      <motion.div
        variants={fadeInUp}
        className="p-12 font-bold z-10 text-white text-center flex-1 flex items-center justify-center flex-col"
      >
        <h1 className="mb-6 uppercase text-4xl xl:text-5xl">
          unt<a className="font-thin">Status</a>
        </h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Web Development,</span> <span>done right.</span>
        </h2>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className={`animate-bounce flex-grow-0 pb-[90px] md:pb-20 transition-all duration-1000 z-10
            ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div>
          <img
            src="/assets/background/arrow.png"
            width={188 / 3}
            height={105 / 3}
            alt="scroll down"
            onLoad={handleImageLoaded}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
