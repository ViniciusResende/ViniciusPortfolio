import React, { useState } from 'react';
import{ init } from 'emailjs-com';
import Modal from 'react-awesome-modal';
import myLogo from '../assets/ViniciusLogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

init("user_RHy4cSD8ow1vSByKNPPIg");

function Contact({ closeContactModal, display}) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })

  function handleInputChange(event){
    values[event.target.name] = event.target.value;
    setValues(values);
  }

  function sendFeedback (templateId, variables) {
    window.emailjs.send(
      'service_hda6ech', templateId,
      variables, 'user_RHy4cSD8ow1vSByKNPPIg'
      ).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        alert('FAILED...', error);
     });
  }

  function handleFormSubmit(event){
    const templateId = 'template_cb5iorv';
    sendFeedback(templateId, {
      from_name: values.name,
      email: values.email,
      phone_number: values.number,
      subject: values.subject,
      message: values.message, 
    })
  }
  return (
    <div className="contactSection">
      <Modal visible={display} width="100%" height="100%" effect="fadeInDown" onClickAway={() => closeContactModal()}>
          <div className="modalContainer">
            <div className="modalHead">
              <img className="logo" src={myLogo} alt="logo"/>
              <FontAwesomeIcon icon={faTimesCircle} className="icon"onClick={() => closeContactModal()}/>
            </div>
          <h2>Entre em contato:</h2>
            <div className="modalContent">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="inputsSection">
                  <input type="text" id="name" name="name" placeholder="Nome" onChange={handleInputChange} required/>
                  <input type="text" id="number" name="number" placeholder="Número de Telefone" onChange={handleInputChange}/>
                  <input type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
                  <input type="text" id="subject" name="subject" placeholder="Assunto" onChange={handleInputChange}/>
                </div>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Descreva brevemente o que quer tratar..." onChange={handleInputChange} required></textarea>
                <div className="formButtons">
                  <input type="submit" value="Enviar" />
                  <a className="modalClose" href="#home" onClick={() => closeContactModal()}>Fechar</a>
                </div>
              </form>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Contact;
