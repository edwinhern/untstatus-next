import React from "react";

interface Props {
  by: string;
  children?: React.ReactNode
}

const Review: React.FC<Props> = ({ children, by }) => (
  <section className="max-w-sm md:max-w-xl lg:max-w-3xl container mx-auto text-center justify-center px-5 md:px-10 lg:px-20">
    <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight">
      &ldquo;{children}&rdquo;
      <div className="mt-6">&mdash; {by}</div>
    </div>
  </section>
);

export default Review;
