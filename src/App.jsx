import './App.css'
import About from './components/About'
import Appoinment from './components/Appoinment'
import Banner from './components/Banner'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Navber from './components/Navber'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Appoinment></Appoinment>
      <Footer></Footer>
    </>
  )
}

export default App
