import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About';
import Contact from './components/ContactMe/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio/>
      <About />
      <Contact/>
      <Footer />
    </>
  )
}

export default App