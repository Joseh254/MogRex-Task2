import React from "react";
import './Navbar.css'
import { useNavigate, Link} from 'react-router-dom'
function Navbar (){
  const navigate = useNavigate()

  function handleNavigateHome(){
navigate("/")
  }
  function handleNavigateServices(){
navigate("/Services")
  }
  function handleNavigateContact(){
navigate("/ContactForm")
  }
  function handleNavigateTestimonials(){
    navigate("/Testimonials")
  }
return(
  <nav className="nav">
    <div>
    <p style={{float:"left"}}> Dev<span style={{color:"blue"}}>Soft</span></p>
    </div>
    <div>
<button onClick={handleNavigateHome}>Home</button>
<button onClick={handleNavigateServices}>Services</button>
<button onClick={handleNavigateContact}> Contact</button>
<button onClick={handleNavigateTestimonials}> Testimonials</button>

    </div>
  </nav>
)
};

export default Navbar;
