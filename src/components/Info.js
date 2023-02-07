import React from 'react';
import InfoPic from "../images/info-pic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Info = () => {
  return (
    <div>
        <img src={InfoPic} alt = "Profile Picture" />
        <h1>Karan Khatri</h1>
        <p>Frontend Developer</p>
        <div className='btn-container'>
        <button className='btn'><FontAwesomeIcon icon={faEnvelope} />Email</button>
        <button className='btn'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
        </div>
        
    </div>
  );
};

export default Info;