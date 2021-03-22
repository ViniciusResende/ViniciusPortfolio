import React from 'react';
import myPicture from '../assets/ViniciusPic.jpeg';

function AboutMe() {
  return (
    <>
      <a id="aboutMe" className="anchor" href="#"></a>
      <div className="aboutMeContainer">
        <img className="profile-picture" src={myPicture} alt="Vinicius Alves"/>
        <div className="aboutMeContent">
          <h2 className="aboutMeTitle">about me</h2>
          <p className="aboutMeText">Olá, me chamo Vinícius Alves de Faria. Tenho inglês avançado, nível B2, pela formação na UpTime, Técnico de Informática formado pela UFV, e estudante de Sistemas de Informação pela Pontifícia Universidade Católica de Minas Gerais, recebi prêmios de honra ao mérito por aproveitamento durante o meu curso técnico e ensino médio pela UFV, prêmio de primeiro lugar na feira FECITEC que ocorre na UFV - Florestal, nesta feira apresentei um projeto na área multidisciplinar (com presença de programação de microcontroladores), esse trabalho foi indicado à apresentação na FEBRACE de São Paulo e na London International Youth Science Forum (LIYSF) em Londres, infelizmente, ambos os eventos foram cancelados pela pandemia. Trabalhei como técnico de informática na empresa Javé Logística, posteriormente como desenvolvedor VBA e WEB pela mesma companhia. Realizei projetos no que tange ao desenvolvimento de aplicativos utilizando as tecnologias WEB, principalmente, ReactNative, ReactJS, NodeJS dentre outras tecnologias, esses projetos foram desenvolvidos perante a orientação de cursos gratuitos disponibilizados na internet e/ou professores da UFV. </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
