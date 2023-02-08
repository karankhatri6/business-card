import React from 'react';
import InfoPic from "../images/info-pic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Info = () => {
  return (
    <div className='info'>
        <img src={InfoPic} alt = "Profile Picture" />
        <h1>Karan Khatri</h1>
        <p>Frontend Developer</p>
        <div className='btn-container'>
        <button className='mail-btn'><FontAwesomeIcon icon={faEnvelope} className="mail-icon" />Email</button>
        <button className='linkedin-btn'><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />LinkedIn</button>
        </div>
        
    </div>
  );
};

export default Info;