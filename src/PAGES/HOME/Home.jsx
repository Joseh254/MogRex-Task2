import React from "react";
import HeroSection from "../../COMPONENTS/HeroSection/HeroSection";
import Services from "../../COMPONENTS/Services/Services";
import ContactForm from "../../COMPONENTS/Contact/ContactForm";
import Testimonials from "../../COMPONENTS/Testimonials/Testimonials";

function Home() {
  return (
    <>
<div style={{margin:"1rem",backgroundColor:"#d6dbe4"}}>
<Services />
      <ContactForm />
      <Testimonials />
</div>
    </>
  );
}

export default Home;
