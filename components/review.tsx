import React from "react";

interface Props {
  by: string;
  children?: React.ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => (
  <section className="max-w-[15rem] md:max-w-xl lg:max-w-3xl container mx-auto text-center justify-center px-5 md:px-10 lg:px-20">
    <div className="text-xl md:text-2xl text-center leading-10 lg:leading-[3rem] tracking-tight">
      &ldquo;{children}&rdquo;
      <div className="mt-6">&mdash; {by}</div>
    </div>
  </section>
);

export default Review;
