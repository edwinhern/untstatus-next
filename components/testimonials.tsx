import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    
    <CarouselItem index={0}>
      <Review by="Edwin Hernandez">
      untstatus is an extremely useful 
      tool for UNT students. The site is 
      one I frequently check to see if there 
      are any outages. Furthermore, the user 
      experience is excellent!
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Malcolm Morton">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Natalie Tang">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Henry Posada">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Bryce Hasty">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
