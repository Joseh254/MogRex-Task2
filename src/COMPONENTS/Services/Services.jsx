import React from "react";
import "./Services.css";
import { FaCode, FaChalkboardTeacher, FaLaptop, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="icon" />,
    title: "Software Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in et eius vero cumque nostrum aut perspiciatis porro error necessitatibus provident ad deserunt nobis nihil, aspernatur cupiditate odit quasi laudantium..",
  },
  {
    icon: <FaChalkboardTeacher className="icon" />,
    title: "Training",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in et eius vero cumque nostrum aut perspiciatis porro error necessitatibus provident ad deserunt nobis nihil, aspernatur cupiditate odit quasi laudantium..",
  },
  {
    icon: <FaLaptop className="icon" />,
    title: "Consulting",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in et eius vero cumque nostrum aut perspiciatis porro error necessitatibus provident ad deserunt nobis nihil, aspernatur cupiditate odit quasi laudantium..",
  },
  {
    icon: <FaTools className="icon" />,
    title: "Hardware Supplies",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi in et eius vero cumque nostrum aut perspiciatis porro error necessitatibus provident ad deserunt nobis nihil, aspernatur cupiditate odit quasi laudantium..",
  },
];
 
function mapServices(Currentservice, i) {
  return (
    <div key={i} className="servicewrapper">
      <div className="servicesContainer">{Currentservice.icon}</div>
      <h3>{Currentservice.title}</h3>
      <p>{Currentservice.description}</p>
      {/* <p>{i=<FaTools />} </p> */}
    </div>
  );
}
function Services() {
  return (
    <section className="serviceComponent">
      <h2 style={{display:"flex", justifyContent:"center",fontWeight:"600", fontSize:"4rem"}}>Our Services</h2>
      <div className="services">{services.map(mapServices)}</div>
    </section>
  );
}

export default Services;
