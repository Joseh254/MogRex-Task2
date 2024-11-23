import React from "react";
import "./HeroSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import me from'../../assets/me.jpg'
function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className="heroSection">
<div>
<h1>Welcome to DevSoft</h1>
      <p>Your trusted partner in technology solutions</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sequi exercitationem libero hic, facilis autem distinctio earum rem illum dolorem, omnis, nostrum similique sunt? Nostrum, minus possimus!</p>
      <button className="learMoreButton">Learn More</button>
</div>

<div>
<Slider {...settings}>
  <div className="textCard">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style={{color:"orange",textTransform:"revert",textDecoration:"italics"}}> Explicabo fugiat ipsa, quaerat quis expedita, </span>Explicabo fugiat ipsa, quaerat quis expedita, eveniet iusto obcaecati mollitia, similique illum perspiciatis quia amet magnam consequatur! Cum unde sint repellat nihil!</p>
  </div>
  {/* <div className="image"><img src={me} alt="" /></div> */}
  <div className="textCard">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span style={{color:"orange",textTransform:"revert",textDecoration:"italics"}}> Explicabo fugiat ipsa, quaerat quis expedita, </span>eveniet iusto obcaecati mollitia, similique illum perspiciatis quia amet magnam consequatur! Cum unde sint repellat nihil!</p>
  </div>
  {/* <div className="image"><img src={me} alt="" /></div> */}
  <div className="textCard">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style={{color:"orange",textTransform:"revert",textDecoration:"italics"}}>Explicabo fugiat ipsa, quaerat quis expedita,</span> eveniet iusto obcaecati mollitia, similique illum perspiciatis quia amet magnam consequatur! Cum unde sint repellat nihil!</p>
  </div>
  {/* <div className="image"><img src={me} alt="" /></div> */}
 
</Slider>
</div>
    </section>
  );
}

export default HeroSection;
