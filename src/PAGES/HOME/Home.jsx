import React from 'react'
import HeroSection from '../../COMPONENTS/HeroSection/HeroSection'
import Services from '../../COMPONENTS/Services/Services'
import ContactForm from '../../COMPONENTS/Contact/ContactForm'
import Testimonials from '../../COMPONENTS/Testimonials/Testimonials'

function Home() {
  return (
    <>
    <HeroSection/>
    <Services/>
    <ContactForm/>
    <Testimonials/>
    </>
  )
}

export default Home