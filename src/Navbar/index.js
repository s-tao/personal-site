import React from 'react';
import { NavContainer, 
         Navbar, 
         SocialMedia, 
         IconStyle, 
         LinkStyle } from './NavStyles.js';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Nav = ({ textColor, hoverColor, activeColor }) => {
  

  return (
    <NavContainer>
      <Navbar>
        <LinkStyle exact to="/" 
                   color={textColor}
                   hover={hoverColor}
                   activeClassName="selected"
                   activeStyle={{ color: activeColor }}>
          HOME
        </LinkStyle>  
        <LinkStyle to="/about" 
                   color={textColor}
                   hover={hoverColor}
                   activeClassName="selected"
                   activeStyle={{ color: activeColor }}>
          ABOUT
        </LinkStyle> 
        <LinkStyle to="/projects" 
                   color={textColor}
                   hover={hoverColor}
                   activeClassName="selected"
                   activeStyle={{ color: activeColor }}>
          PROJECTS
        </LinkStyle> 
        </Navbar>
  
        <SocialMedia>
        <a href="https://www.linkedin.com/in/sarahtao/">
            <IconStyle icon={faLinkedin} 
                       size="2x"
                       color={textColor}
                       hover={hoverColor}
                       />
        </a>
        <a href="https://github.com/s-tao">
            <IconStyle icon={faGithubSquare} 
                       color={textColor}
                       hover={hoverColor}
                       size="2x"/>
        </a>
        </SocialMedia>
    </NavContainer>
  );
}

export default Nav;