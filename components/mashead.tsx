import React, { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import Image from "next/image";

const Masthead: React.FC = () => {
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
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(=${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-screen h-screen object-cover saturate-150"
      >
        <source
          src="/assets/background/bg-video.mp4"
          type="video/mp4; codecs=hvc1"
        />
        <source
          src="/assets/background/bg-video.webm"
          type="video/webm; codecs=vp9"
        />
      </video>

      <div
        className={`flex-grow-0 pt-10 transition-all duration-1000
            ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/assets/logos/logo-50.svg"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
          onLoad={handleImageLoaded}
        />
      </div>
      <div className="p-12 font-bold z-10 text-white text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 uppercase text-4xl xl:text-5xl">untStatus</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Web Development,</span> <span>done right.</span>
        </h2>
      </div>
      <div
        className={`animate-bounce flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 z-10
            ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <img
          src="/assets/background/arrow.png"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
