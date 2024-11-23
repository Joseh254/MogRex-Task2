import Services from './COMPONENTS/Services/Services'
import Navbar from './COMPONENTS/Navbar/Navbar'
import HeroSection from './COMPONENTS/HeroSection/HeroSection'
import Testimonials from './COMPONENTS/Testimonials/Testimonials'
import ContactForm from './COMPONENTS/Contact/ContactForm'
import Home from './PAGES/HOME/Home'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Testimonials' element={<Testimonials/>}/>
    <Route path='/ContactForm' element={<ContactForm/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App
