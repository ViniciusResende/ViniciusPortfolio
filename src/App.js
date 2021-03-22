import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import MyProjects from './components/MyProjects';
import Networkings from './components/Networkings';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [isContactActive, setIsContactActive] = useState(false);

  const openContactModal = () => setIsContactActive(true);

  const closeContactModal = () => setIsContactActive(false);
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#3178c6"
              }
            }
          }
        }}
      />
      <Contact closeContactModal={closeContactModal} display={isContactActive}/>
      <Navbar openContactModal={openContactModal}/>    
      <Header openContactModal={openContactModal}/>
      <AboutMe />
      <Services />
      <Experience />
      <MyProjects />
      <Networkings />
      <Footer />
    </>
  );
}

export default App;
