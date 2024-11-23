import React from "react";
import './Navbar.css'
import { useNavigate, Link} from 'react-router-dom'
function Navbar (){
  const navigate = useNavigate()

  function handleNavigateHome(){
navigate("/")
  }
  function handleNavigateServices(){
navigate("/")
  }
  function handleNavigateContact(){
navigate("/ContactForm")
  }
return(
  <nav className="nav">
    <div>
    <p> Dev<span style={{color:"blue"}}>Soft</span></p>
    </div>
    <div>
<button onClick={handleNavigateContact}>Home</button>
{/* <button onClick={handleNavigateContact}>Services</button>
<button onClick={handleNavigateContact}> Contact</button> */}

    </div>
  </nav>
)
};

export default Navbar;
