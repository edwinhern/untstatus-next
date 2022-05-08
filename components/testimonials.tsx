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
      The design and user experience is amazing!
      I had no issues navigating to the features section for Canvas. 
      Would definitly use this site for upcoming stats.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Natalie Tang">
      Provides real-time updates that help me stay up to date. 
      Saves me time from calling Student Helpdesk at UNT.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Henry Posada">
        Eliminates the inconvience of calling UNT Helpdesk or 
        searching for updated information. Would promote to UNT.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Bryce Hasty">
        UNT should buy this product. It is amazing!
        Never had any issues when communicating with Edwin throuhg the 
        contact form.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
