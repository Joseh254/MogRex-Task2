import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,             // Show navigation dots
    infinite: true,         // Loop through slides
    speed: 500,             // Transition speed in milliseconds
    slidesToShow: 1,        // Number of slides to show at once
    slidesToScroll: 1,      // Number of slides to scroll at a time
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 3000,    // Interval between slides (in milliseconds)
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
