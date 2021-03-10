import React from 'react';
import Typed from 'react-typed';

const Header = ({ openContactModal }) => {
  return (
    <div className="header-wrapper" id="home">
      <div className="main-info">
        <h1>Junior Frontend Developer and Assiduous Student</h1>
        <Typed 
          className="typed-text"
          strings={["Junior Frontend Developer","Web Development", "Fullstack Enthusiastic", "Student", "Technology Lover"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a onClick={() => openContactModal()} className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header
