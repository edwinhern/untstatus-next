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
    <section className="flex flex-col bg-black text-white py-20 text-3xl md:text-4xl">
      <div
        ref={refContainer}
        className="font-bold container mx-auto px-11 lg:text-center"
      >
        <p className="leading-tight max-w-5xl mx-auto  sm:text-4xl md:text-5xl tracking-tight">
          <span
            className={s.aboutText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Here to keep you up to date, faster.
          </span>
          <span
            className={`${s.aboutText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            This project has been on my mind for some time.&nbsp;This was
            inspired by the AWS outage we experienced during finals week in
            term: Fall 2021.
          </span>
          <span
            className={`${s.aboutText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Hopefully, it is useful for us UNT Faculty, Staff, and Students
            further down the road.
          </span>
        </p>
      </div>
      <div className="container mx-auto px-10 text-center items-center justify-center mt-28">
        <h2 className="-mb-4"> Owner</h2>
        <div className="mt-10 grid gap-6 lg:gap-20">
          <div className="">
            <div className="container max-w-screen-lg mx-auto">
              <img
                alt="pictureofEdwin"
                className="mx-auto object-cover mb-2 w-44 h-44 rounded-full"
                src="/assets/social-media/me.JPG"
              />
            </div>
            <div className="text-2xl xl:text-3xl">Edwin Hernandez</div>
            <div className="text-xl">
              <a href="https://www.linkedin.com/in/edwinhern16/">
                @Edwinhern16
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
