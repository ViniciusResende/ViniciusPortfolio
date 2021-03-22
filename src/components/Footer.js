import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footerContainer">
      <div className="contentSection">
        <a href="mailto:viniciusfariaresende@gmail.com" target="_blank" rel="noreferrer">viniciusfariaresende@gmail.com</a>
        <a href="https://goo.gl/maps/vUiUXWWaG5XuEvwE6" target="_blank" rel="noreferrer">Contagem, Minas Gerais, Brasil</a>
        <a href="tel:+5531984033879" target="_blank" rel="noreferrer">+55 (31) 98403-3879</a>
      </div>
      <div className="contentSection">
        <a href="#home">Home</a>
        <a href="#aboutMe">About</a>
        <a href="#services">Abilities</a>
      </div>
      <div className="contentSection">
        <a href="#timeline">Timeline</a>
        <a href="#projects">Projects</a>
        <a href="#networkings">Networkings</a>
      </div>
      <div className="contentSection">
        <div className="iconContainer">
          <a href="https://www.linkedin.com/in/viniciusalvesdefaria/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="contactIcon"/>
          </a>
          <a href="https://github.com/ViniciusResende" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="contactIcon"/>            
          </a>
          <a href="https://www.instagram.com/viniziu.alves/?hl=pt-br" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="contactIcon"/>
          </a>
        </div>
        <p>Feito com ❤ por Vinícius Alves.</p>
      </div>
    </div>
  )
}

export default Footer;
