import { ScrollContext } from "../src/utils/scroll-observer";
import style from "../styles/About.module.css";
import { useContext, useRef } from "react";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

export const About: React.FC = () => {
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
            className={`${style.aboutText}`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            <strong className="text-blue-500">Stay ahead of the curve</strong>{" "}
            with our{" "}
            <strong className="text-green-500">cutting-edge project</strong>.
          </span>
          <span
            className={`${style.aboutText} inline-block leading-snug after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            We have been working diligently to bring this to fruition, fueled by
            the determination to prevent another incident like the{" "}
            <strong className="text-pink-500">
              Fall 2021 AWS outage at UNT
            </strong>{" "}
            during finals week. <br></br> Our goal is to provide a{" "}
            <strong className="text-green-500">
              useful and reliable resource
            </strong>{" "}
            for{" "}
            <strong className="text-blue-500">
              UNT Faculty, Staff, and Students
            </strong>
            .
          </span>
          <span
            className={`${style.aboutText} leading-snug inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Join us in our <strong className="text-green-500">mission</strong>{" "}
            to{" "}
            <strong className="text-pink-500">
              stay informed and prepared
            </strong>{" "}
            for the <strong className="text-purple-500">future</strong>.
          </span>
        </p>
      </div>
    </section>
  );
};
