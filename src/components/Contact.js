import React, { useState, createRef } from 'react';
import Modal from 'react-awesome-modal';
import myLogo from '../assets/ViniciusLogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import api from '../services/api';
import Input from './Input';


function Contact({ closeContactModal, display, formSubmitSucced, formSubmitFail, formInsufficientFormContent }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  })

  const formRef = createRef(null);

  const [requiredClassWarn, setRequiredClassWarn] = useState('');
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  function closeModalHandler() {
    closeContactModal();
    setRequiredClassWarn('');
  }

  function handleInputChange(event){
    values[event.target.name] = event.target.value;
    setValues(values);
  }

  const formSubmit = async (event) => {
    event.preventDefault();

    let data ={
      name: values.name,
      email: values.email,
      number: values.number,
      subject: values.subject,
      message: values.message,
    }

    if(!(data.name && data.email && data.message)){
      setRequiredClassWarn('requiredWarn');
      formInsufficientFormContent();
    } else {      
      resetForm();   
      setIsLoadingSubmit(true);
      setRequiredClassWarn('');
      await api.post('/api/form', data, { timeout: 60000 })
      .then(response => {     
        formSubmitSucced();
      }).catch((error) => {
        console.log('error', error);
        formSubmitFail();
      });
      setIsLoadingSubmit(false);
    }    
  }

  const resetForm = () => {
    formRef.current.reset();
    setValues({
      name: '',
      email: '',
      number: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="contactSection">
      <Modal visible={display} width="100%" height="100%" effect="fadeInDown" onClickAway={() => closeModalHandler()}>
          <div className="modalContainer">
            <div className="modalHead">
              <img className="logo" src={myLogo} alt="logo"/>
              <FontAwesomeIcon icon={faTimesCircle} className="icon"onClick={() => closeModalHandler()}/>
            </div>
          <h2>Entre em contato:</h2>
            <div className="modalContent">
              <form action="" onSubmit={formSubmit} ref={formRef}>
                <div className="inputsSection">
                  <input className={requiredClassWarn} type="text" id="name" name="name" placeholder="Nome" onChange={handleInputChange} />
                  <Input type="text" id="number" name="number" mask="cellphone" onChange={handleInputChange} placeholder="Número de Telefone"/>
                  <input className={requiredClassWarn} type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} />
                  <input type="text" id="subject" name="subject" placeholder="Assunto" onChange={handleInputChange}/>
                </div>
                <textarea className={requiredClassWarn} name="message" id="message" cols="30" rows="10" placeholder="Descreva brevemente o que quer tratar..." onChange={handleInputChange}></textarea>
                <div className="formButtons">
                  {isLoadingSubmit ? <> <div className="lds-dual-ring"></div> <button type="submit" value="Enviando..." disabled>Enviando...</button> </> :  <button type="submit" value="Enviar">Enviar</button> }                 
                  <a className="modalClose" href="#home" onClick={() => closeModalHandler()}>Fechar</a>
                </div>
              </form>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Contact;
