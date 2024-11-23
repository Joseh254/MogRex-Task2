import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import me from "../../assets/me.jpg";
import "./Testimonials.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonies = [
    { svg: me, name: "Joseph", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Joel", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Wilson", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Kimodo", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Jack Daniel", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Captain Morgan", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Rebel", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Chrome", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Emma Mbugua", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Vin Diesel", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "John Sinner", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
    { svg: me, name: "Paul Walker", testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore beatae aperiam, assumenda impedit error." },
  ];
function slider(currentTestimony, i){
  return(
     
      <div key={i} className="testimonyWrapper">
        <div className="testimonyContainer">
          <img src={currentTestimony.svg} alt={`${currentTestimony.name}'s feedback`} />
          <h3>{currentTestimony.name}</h3>
          <p>{currentTestimony.testimony}</p>
        </div>
      </div>
    
  )}

  return (
    <div className="testimonials-section">
      <h2>
        What Others Say About Us
      </h2>
      <Slider {...settings}>
        {testimonies.map(slider)}
      </Slider>
    </div>
  );
}

export default Testimonials;
