import React, { useState } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const formSubmitSucced = () => successEmail();

  const formSubmitFail = () => failEmail();

  const formInsufficientFormContent = () => insufficientFormContent();

  const toastConfig = {
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    zIndex: 10001,
  }

  const successEmail = () => toast.success('✅ Email enviado com sucesso! Entrarei em contato em breve!', toastConfig);

  const failEmail = () => toast.error('❌ Falha no envio de email! Por favor entre em contato por meio das opções do rodapé', toastConfig);

  const insufficientFormContent = () => toast.error('❌ Os campos "Nome", "Email" e "Mensagem", obrigatoriamente, devem estar devidamente preenchidos.', toastConfig);
  
  return (
    <div className={isContactActive ? "masterContainer" : ""}>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Contact closeContactModal={closeContactModal} display={isContactActive} formSubmitSucced={formSubmitSucced} formSubmitFail={formSubmitFail} formInsufficientFormContent={formInsufficientFormContent}/>
      <Navbar openContactModal={openContactModal}/>    
      <Header openContactModal={openContactModal}/>
      <AboutMe />
      <Services />
      <Experience />
      <MyProjects />
      <Networkings />
      <Footer />
    </div>
  );
}

export default App;
