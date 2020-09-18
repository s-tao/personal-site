import React from 'react';
import styled from 'styled-components';
import { Navbar } from './NavStyles.js';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  
  const handleNavChange = () => {

  }

  const NavStyle = styled(NavLink)`
    padding: 0 15px;
    text-decoration: none;
    color: 'black';
    :hover {
        color: #f7f7f7;
    }
  `;
  
  return (
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
  );
}

export default Nav;