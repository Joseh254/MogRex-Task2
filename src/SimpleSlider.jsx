import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,             // Show navigation dots
    infinite: true,         // Loop through slides
    speed: 500,             // Transition speed in milliseconds
    slidesToShow: 4,        // Number of slides to show at once
    slidesToScroll: 1,      // Number of slides to scroll at a time
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 3000,    // Interval between slides (in milliseconds)
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illo quas vitae consequatur nulla cum deserunt iste consectetur voluptatem! Inventore ratione minima consectetur voluptas rerum rem beatae possimus magnam enim.</h3>
      </div>
      <div>
        <h3>Slide 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt qui quibusdam accusantium blanditiis fugiat ea enim, praesentium minus ad. Quod eaque maiores fugiat adipisci, obcaecati maxime. Aperiam amet numquam commodi!</h3>
      </div>
      <div>
        <h3>Slide 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, tempora aut. Itaque possimus magnam, odit minus, repellendus dolore quas soluta quisquam aliquam hic enim molestias iusto impedit quibusdam blanditiis consequuntur!</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
