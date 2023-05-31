import { stagger, fadeInUp } from "../src/utils/framer-motion/MastheadConfig";
import { useRef, useContext, useState, useCallback, useMemo } from "react";
import { ScrollContext } from "../src/utils/scroll-observer";
import style from "../styles/Masthead.module.css";
import { motion } from "framer-motion";

export const Masthead = () => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const progress = useMemo(() => {
    let progressValue = 0;
    const { current: elContainer } = refContainer;
    if (elContainer) {
      progressValue = Math.min(1, scrollY / elContainer.clientHeight);
    }
    return progressValue;
  }, [scrollY, refContainer]);

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
        className={`${style.mastHeadBackground} absolute w-screen min-h-[90vh] md:h-screen saturate-100`}
      />

      <motion.div
        variants={fadeInUp}
        className="p-12 font-bold z-10 text-white text-center flex-1 flex items-center justify-center flex-col"
      >
        <h1 className="mb-6 uppercase text-4xl xl:text-5xl">
          unt<a className="font-light">Status</a>
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
