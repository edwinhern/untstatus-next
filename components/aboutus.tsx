import React, { useContext, useRef } from "react";
import s from "../styles/aboutus.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const AboutUs: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPage = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPage - 0.5, Math.max(0.5, percentY * numOfPage));
  }
  return (
    <section
      id="about"
      className="flex flex-col bg-black text-white py-5 lg:py-10"
    >
      <div
        ref={refContainer}
        className="tracking-normal font-bold container mx-auto px-10 lg:px-20 py-10 lg:py-20"
      >
        <p className="leading-snug mb-10 max-w-5xl mx-auto my-auto text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
          <span
            className={`${s.aboutText}`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Here to keep you up to date,{" "}
            <strong className="text-blue-500">faster</strong>.
          </span>
          <span
            className={`${s.aboutText} inline-block leading-snug after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            This project has been on my mind for some time.&nbsp;This was
            inspired by the{" "}
            <strong className="text-pink-500">AWS outage</strong> that happened
            during finals week in term:{" "}
            <strong className="text-purple-500">Fall 2021</strong> at{" "}
            <strong className="text-green-500">UNT</strong>.
          </span>
          <span
            className={`${s.aboutText} leading-snug inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Hopefully, it is useful for us{" "}
            <strong className="">UNT Faculty</strong>,{" "}
            <strong className="">Staff</strong>, and{" "}
            <strong className="text-pink-500">Students </strong>
            further down the road.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
