import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faCogs, faBook } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <>
      <a id="services" className="anchor" href=""></a>
      <div className="servicesContainer" >
        <h2>my abilities</h2>
        <div className="framesContainer">
          <div className="frame">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faReact} className="frameIcon"/>
            </div>
            <h4 className="frameTitle">Junior Frontend Developer</h4>
            <p className="frameDescription">Atualmente sou um desenvolvedor frontend junior, tenho habilidades com HTML5, CSS3, JavaScript, TypeScrip e ReactJs. Assim, busco sempre melhorar minhas habilidades nessa área da melhor forma.</p>
          </div>
          <div className="frame">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faLaptopCode} className="frameIcon"/>
            </div>
            <h4 className="frameTitle">Web Developer</h4>
            <p className="frameDescription">Tenho conhecimento em desenvolvimento web em geral, principalmente no que tange ao frontend. Tenho experiência no desenvolvimento de aplicativos web e no desenvolvimento de websites.</p>
          </div>
          <div className="frame">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faCogs} className="frameIcon"/>
            </div>
            <h4 className="frameTitle">Fullstack Enthusiastic</h4>
            <p className="frameDescription">Atualmente tenho entusiasmo em estudar todas as tecnologias envolvidas no desenvolvimento de um aplicativo. De forma mais específica, sou entusiasta do ReactJs e React Native no desenvolvimento frontend e no NodeJs para desenvolvimento de backend.</p>
          </div>
          <div className="frame">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faBook} className="frameIcon"/>
            </div>
            <h4 className="frameTitle">Student</h4>
            <p className="frameDescription">De forma geral sou um estudante apaixonado por tecnologia, que sempre está em busca de novos desafios na área da programação. Atualmente faço curso superior em Sistemas de Informações e estudo de forma autônoma pela internet.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
