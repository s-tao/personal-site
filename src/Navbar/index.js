import React, { useEffect, useState } from 'react';
import { NavContainer, 
         Navbar, 
         SocialMedia, 
         IconStyle, 
         LinkStyle,
         MobileNavContainer,
         MobileNavbar,
         MobileNavLink,
         MobileIconStyle,
         MobileSocialMedia
       } from './NavStyles.js';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faBook } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ textColor, hoverColor, activeColor }) => {
  
  const [mobileNav, setMobileNav] = useState(null);
  const isMobile = mobileNav <= 640;

  useEffect(() => {
    setMobileNav(window.innerWidth);
  }, []);

  useEffect(() => {
    // may switch to function dec. for global access
    const handleResize = () => {
      setMobileNav(window.innerWidth);
    }
  
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)
  }, []);


  return (
    <>
      {isMobile ? (
        <MobileNavContainer>
          <MobileNavbar>
            <MobileNavLink exact to="/">
              <MobileIconStyle icon={faHome}
                               color={hoverColor}
                               size="2x">
              </MobileIconStyle>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about">
              <MobileIconStyle icon={faUser}
                               color={hoverColor}
                               size="2x">
              </MobileIconStyle>
              About
            </MobileNavLink>
            <MobileNavLink to="/projects">
              <MobileIconStyle icon={faBook}
                               color={hoverColor}
                               size="2x">
              </MobileIconStyle>
              Projects
            </MobileNavLink>
            <MobileSocialMedia a href="https://www.linkedin.com/in/sarahtao/">
              <MobileIconStyle icon={faLinkedin}
                               color={hoverColor}
                               size="2x">
              </MobileIconStyle>
              LinkedIn
            </MobileSocialMedia>
            <MobileSocialMedia a href="https://github.com/s-tao">
              <MobileIconStyle icon={faGithubSquare}
                               color={hoverColor}
                               size="2x">
              </MobileIconStyle>
              Github
            </MobileSocialMedia>
          </MobileNavbar>
        </MobileNavContainer>
      ) : (
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
      )}
      
    </>
  );
}

export default Nav;