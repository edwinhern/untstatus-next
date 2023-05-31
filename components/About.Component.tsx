import { useMemo } from "react";
import TextBlock from "./About/TextBlock.Component";
import { useScrollProgress } from "../src/hooks/useScrollProgress";

const calculateOpacity = (progress, blockNo) => {
  const calculatedProgress = progress - blockNo;
  return calculatedProgress >= 0 && calculatedProgress < 1 ? 1 : 0.2;
};

export const About: React.FC = () => {
  const numOfPage = 3;
  const [progress, refContainer] = useScrollProgress(numOfPage);

  const textBlocks = useMemo(
    () => [
      {
        text: (
          <>
            <strong className="text-blue-500">Stay ahead of the curve</strong>{" "}
            with our{" "}
            <strong className="text-green-500">cutting-edge project</strong>.
          </>
        ),
        blockNumber: 0,
      },
      {
        text: (
          <>
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
          </>
        ),
        blockNumber: 1,
      },
      {
        text: (
          <>
            Join us in our <strong className="text-green-500">mission</strong>{" "}
            to{" "}
            <strong className="text-pink-500">
              stay informed and prepared
            </strong>{" "}
            for the <strong className="text-purple-500">future</strong>.
          </>
        ),
        blockNumber: 2,
      },
    ],
    []
  );

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
          {textBlocks.map((block) => (
            <TextBlock opacity={calculateOpacity(progress, block.blockNumber)}>
              {block.text}
            </TextBlock>
          ))}
        </p>
      </div>
    </section>
  );
};
