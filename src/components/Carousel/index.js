import React from "react";
import MultiCarousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Carousel = ({ children, ...rest }) => {
  return (
    <MultiCarousel responsive={responsive} infinite autoPlay {...rest}>
      {children}
    </MultiCarousel>
  );
};
