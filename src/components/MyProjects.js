import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';

import RIVPR from '../assets/RIVPRLogo1920.png';
import Jave from '../assets/JavePrint1920.png';
import Moveit from '../assets/MoveitPrint1920.png';
import EmailApi from '../assets/apiPrint1920.png';

function MyProjects() {
  const [isRIVPRVisible, setIsRIVPRVisible] = useState(false);
  const [isJaveVisible, setIsJaveVisible] = useState(false);
  const [isMoveitVisible, setIsMoveitVisible] = useState(false);
  const [isEmailApiVisible, setIsEmailApiVisible] = useState(false);

  const [modalWidth, setModalWidth] = useState('50%');
  const [modalHeight, setModalHeight] = useState('72%');

  useEffect(() =>{ 
    window.innerHeight <= 900 && setModalHeight('78%');
    window.innerHeight <= 768 && setModalHeight('95%');

    window.innerWidth <= 1600 && setModalWidth('80%');
    window.innerWidth <= 1024 && setModalWidth('80%');
    window.innerWidth <= 1024 && setModalHeight('60%');
    window.innerWidth <= 768 && setModalHeight('60%');
    window.innerWidth <= 540 && setModalWidth('100%');
    window.innerWidth <= 540 && setModalHeight('100%');
      
  }, [])

  const openModalRIVPR = () => {
    setIsRIVPRVisible(true);
  }
  const openModalJave = () => {
    setIsJaveVisible(true);
  }
  const openModalMoveit = () => {
    setIsMoveitVisible(true);
  }
  const openModalEmailApi = () => {
    setIsEmailApiVisible(true)
  }

  const closeModal = () => {
    setIsRIVPRVisible(false);
    setIsJaveVisible(false);
    setIsMoveitVisible(false);
    setIsEmailApiVisible(false);
  }

  return (
    <>
      <a id="projects" className="anchor" href="#"></a>
      <div className="myProjectsContainer">
        <h2>my projects</h2>
        <div className="projectsContainer">
          <div className="project" onClick={() => openModalRIVPR()}>
            <img src={RIVPR} alt=""/>
          </div>
          <div className="project" onClick={() => openModalJave()}>
            <img src={Jave} alt=""/>
          </div>
          <div className="project" onClick={() => openModalMoveit()}>
            <img src={Moveit} alt=""/>
          </div>
          <div className="project" onClick={() => openModalEmailApi()}>
            <img src={EmailApi} alt=""/>
          </div>
        </div>
        <Modal visible={isRIVPRVisible} width={modalWidth} height={modalHeight} effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modalContainer">
            <div className="modalContent">
              <h2>RIVPR</h2>
              <img src={RIVPR} alt=""/>
              <p>?? uma aplica????o que permite aos usu??rios reportarem problemas em sua regi??o, assim as entidades governamentais poder??o ver mais facilmente os problemas com a cidade e resolverem eles o quanto antes.</p>
              <p>GitHub Repository: <a href="https://github.com/ViniciusResende/RIVPR" target="_blank" rel="noreferrer">https://github.com/ViniciusResende/RIVPR</a></p> 
              <a className="modalClose" href="javascript:void(0);" onClick={() => closeModal()}>fechar</a>
            </div>
          </div>
        </Modal>
        <Modal visible={isJaveVisible} width={modalWidth} height={modalHeight} effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modalContainer">
            <div className="modalContent">
              <h2>Jav?? Log??stica Website</h2>
              <img src={Jave} alt=""/>
              <p>?? um website para uma empresa de log??stica que pretende ser uma boa maneira de introduzir a empresa para qualquer um que procurar sobre ela.</p>
              <p>GitHub Repository: <a href="https://github.com/ViniciusResende/JaveLogisticaReact" target="_blank" rel="noreferrer">https://github.com/ViniciusResende/JaveLogisticaReact</a></p> 
              <a className="modalClose" href="javascript:void(0);" onClick={() => closeModal()}>fechar</a>
            </div>
          </div>
        </Modal>
        <Modal visible={isMoveitVisible} width={modalWidth} height={modalHeight} effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modalContainer">
            <div className="modalContent">
              <h2>Time to moveit</h2>
              <img src={Moveit} alt=""/>
              <p>?? uma aplica????o que permite aos usu??rios usar um contador regressivo que ir?? enviar uma notifica????o para o usu??rio quando a contagem terminar, e ent??o disponibilizar?? uma exerc??cio para ser feito</p>
              <p>GitHub Repository: <a href="https://github.com/ViniciusResende/TimeToMoveIt" target="_blank" rel="noreferrer">https://github.com/ViniciusResende/TimeToMoveIt</a></p> 
              <a className="modalClose" href="javascript:void(0);" onClick={() => closeModal()}>fechar</a>
            </div>
          </div>
        </Modal>
        <Modal visible={isEmailApiVisible} width={modalWidth} height={modalHeight} effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modalContainer">
            <div className="modalContent">
              <h2>Send Satisfaction Email Api</h2>
              <img src={EmailApi} alt=""/>
              <p>?? uma API desenvolvida usando NodeJs que envia pesquisas de satisfa????o para o email de usu??rios e ent??o calcula o NPS de uma certa empresa.</p>
              <p>GitHub Repository: <a href="https://github.com/ViniciusResende/NpsAPI" target="_blank" rel="noreferrer">https://github.com/ViniciusResende/NpsAPI</a></p> 
              <a className="modalClose" href="javascript:void(0);" onClick={() => closeModal()}>fechar</a>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default MyProjects
