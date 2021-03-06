import React from "react";

interface Props {
  by: string;
  children?: React.ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => (
  <section className="max-w-[15rem] md:max-w-xl lg:max-w-3xl container mx-auto justify-center px-5 md:px-10 lg:px-20">
    <div className="sm:text-[20px] md:text-3xl text-center leading-[25px] lg:leading-[40px] tracking-normal">
      &ldquo;{children}&rdquo;
      <div className="mt-6 text-[16px]">&mdash; {by}</div>
    </div>
  </section>
);

export default Review;
