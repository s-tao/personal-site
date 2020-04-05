import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faBuffer } from '@fortawesome/free-brands-svg-icons';
import { NavStyles } from '../NavStyles.js';


const Nav = () => {
  const iconStyle = {
    margin: '8px 0',
    color: '#ffffff',
  };

  return (
    <NavStyles>
      <a href="https://www.linkedin.com/in/sarahtao/">
        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} size="2x"/>
      </a>
      <a href="https://github.com/s-tao">
        <FontAwesomeIcon icon={faGithubSquare} style={iconStyle} size="2x"/>
      </a>

       <FontAwesomeIcon icon={faBuffer} style={iconStyle} size="2x"/>
    </NavStyles>
  );
}

export default Nav;