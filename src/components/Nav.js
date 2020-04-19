import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faParking, faHome } from '@fortawesome/free-solid-svg-icons';

import { NavStyle, IconStyle } from '../NavStyles.js';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Project from './Project.js';
import Homepage from './Homepage.js';


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
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/projects">
          <Project/>
        </Route>
      </Switch>
    </Router>
     
  );
}

export default Nav;