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
        clientHeight,
        halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPage - 0.5, Math.max(0.5, percentY * numOfPage));
  }
  return (
    <section className="flex flex-col bg-black text-white py-20">
      <div
        ref={refContainer}
        className="font-bold container mx-auto px-10 lg:px-20 py-10 lg:py-18"
      >
        <p className="leading-tight max-w-5xl mx-auto text-3xl md:text-5xl lg:text-6xl tracking-tight">
          <span
            className={`${s.aboutText}`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Here to keep you up to date, <strong className="text-blue-500">faster</strong>.
          </span>
          <span
            className={`${s.aboutText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            This project has been on my mind for some time.&nbsp;This was
            inspired by the <strong className="text-pink-500">AWS outage</strong> that happened during finals week in
            term: <strong className="text-purple-500">Fall 2021</strong> at <strong className="text-green-500">UNT</strong>.
          </span>
          <span
            className={`${s.aboutText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Hopefully, it is useful for us <strong className="text-green-500">UNT Faculty</strong>, <strong className="text-purple-500">Staff</strong>, and <strong className="text-pink-500">Students </strong>
            further down the road.
          </span>
        </p>
      </div>
    </section>

    // <div ref={refContainer} className="bg-black text-white">
    //   <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-2 md:py-28 lg:py-36 flex flex-col justify-center items-center text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
    //     <div className="leading-[1.15]">
    //       <div>
    //         <span
    //           className={`${s.aboutText}`}
    //           style={{
    //             opacity: opacityForBlock(progress, 0),
    //           }}
    //         >
    //           Here to keep you up to date, faster.
    //         </span>
    //         <span
    //           className={`${s.aboutText} inline-block after:content-['_']`}
    //           style={{
    //             opacity: opacityForBlock(progress, 1),
    //           }}
    //         >
    //           This project has been on my mind for some time.&nbsp;This was
    //           inspired by the AWS outage we experienced during finals week in
    //           term: Fall 2021.
    //         </span>
    //         <span
    //           className={`${s.aboutText} inline-block`}
    //           style={{
    //             opacity: opacityForBlock(progress, 2),
    //           }}
    //         >
    //           Hopefully, it is useful for us UNT Faculty, Staff, and Students
    //           further down the road.
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutUs;
