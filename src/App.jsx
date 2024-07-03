import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Faq from './components/Faq'
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
    </>
  )
}

export default App
