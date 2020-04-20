import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faParking, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavStyle, IconStyle } from '../NavStyles.js';
import { 
  BrowserRouter as Router, 
  Link, 
  Switch, 
  Route
} from 'react-router-dom';
import Projects from './Projects.js';
import Homepage from './Homepage.js';
import WhatsMyCare from './WhatsMyCareProj.js';
import PortfolioWebsite from './PortfolioWebsite.js';

const Nav = () => {
  
  return (
    <Router>
      <NavStyle>
        <Link to="/">
          <IconStyle>
            <FontAwesomeIcon icon={faHome} size="2x" />
          </IconStyle>
        </Link>
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
        <Link to="/projects">
          <IconStyle>
            <FontAwesomeIcon icon={faParking} size="2x"/>
          </IconStyle>
        </Link>
      </NavStyle>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects/portfolio-website" component={PortfolioWebsite} />
        <Route path="/projects/whats-my-care" component={WhatsMyCare} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default Nav;