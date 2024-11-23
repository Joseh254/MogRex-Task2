import React from 'react'
import './Footer.css'
import { Link} from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";
function Footer(icon,text) {
  return (
    <div className='footer'>
<div className="about">
<h1>About Us</h1>
<div style={{justifyContent:"center",alignItems:"center", alignContent:"center"}}>{icon=<IoLocationOutline  style={{fill:"red", fontSize:"3rem"}}/>} {text="Kenya,Moi Avenue,Iconic Plaza,Room S3"}</div>
<div>{icon=<SiMinutemailer style={{fontSize:"3rem"}}/>}<Link to={"mogrexlimited@gmail.com"} style={{textDecoration:"none"}}>mogrexlimited@gmail.com</Link> </div>
<div>{icon=<SiWhatsapp style={{fill:"green", fontSize:"3rem"}}/>} {text="+254768163608"}</div>
</div>


<div className="links">
    <h1>Links</h1>
<Link to={"/"}>Home</Link>
<Link to={"/Services"}>Services</Link>
<Link to={"/ContactForm"}>Contact Us</Link>
<Link to={"/Testimonials"}>Testimonies</Link>
</div>


<div className="services">
    <h1>Our Services</h1>
<p>Software Development</p>
<p>Training & Internships</p>
<p>Free consoltation</p>
<p>Hardware Supplies</p>
</div>


    </div>
  )
}

export default Footer