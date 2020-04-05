import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faParking } from '@fortawesome/free-solid-svg-icons';

import { NavStyle, IconStyle } from '../NavStyles.js';


const Nav = () => {

  return (
    <NavStyle>
      <a href="https://www.linkedin.com/in/sarahtao/">
      <IconStyle>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </IconStyle>
      </a>
      <a href="https://github.com/s-tao">
      <IconStyle>
        <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
      </IconStyle>
      </a>
      <IconStyle><FontAwesomeIcon icon={faParking} size="2x"/></IconStyle>
    </NavStyle>
  );
}

export default Nav;