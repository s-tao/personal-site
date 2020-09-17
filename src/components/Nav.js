import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../NavStyles.js';
import { 
  BrowserRouter as Router, 
  NavLink, 
  Switch, 
  Route
} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Homepage from './Homepage.js';

// import WhatsMyCare from './WhatsMyCareProj.js';
// import PortfolioWebsite from './PortfolioWebsite.js';

const Nav = () => {
  const NavStyle = styled(NavLink)`
    padding: 0 15px;
    text-decoration: none;
    :hover {
        color: #f7f7f7;
    }
  `;
  
  return (
    <Router>
      <Navbar>
        <NavStyle exact to="/" 
                 activeClassName="selected"
                 activeStyle={{ fontWeight: "bold", 
                                color: "#e17f0b" }}>
          HOME
        </NavStyle>  
        <NavStyle to="/about" 
                 activeClassName="selected"
                 activeStyle={{ fontWeight: "bold", 
                                color: "#e17f0b" }}>
          ABOUT
        </NavStyle> 
        <NavStyle to="/projects" 
                 activeClassName="selected"
                 activeStyle={{ fontWeight: "bold", 
                                color: "#e17f0b" }}>
          PROJECTS
        </NavStyle>   
      </Navbar>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/projects/portfolio-website" component={PortfolioWebsite} />
        <Route path="/projects/whats-my-care" component={WhatsMyCare} /> */}
      </Switch>
    </Router>
  );
}

export default Nav;