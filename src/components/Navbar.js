import React from 'react';
import myLogo from '../assets/ViniciusLogo.PNG';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openContactModal }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home"><img className="logo" src={myLogo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">about</a>
            </li>     
            <li className="nav-item">
              <a className="nav-link" href="#services">abilities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline">timeline</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">projects</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link" href="#networkings">networkings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => openContactModal()}>contact</a>
            </li>  
          </ul>        
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
