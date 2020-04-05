import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faBuffer } from '@fortawesome/free-brands-svg-icons'
import profilePic from '../prof-pic.jpg' 
import { Container, FlipContainer, Block } from '../styled.js'
// import { useTransition, useSpring, useChain, config } from 'react-spring'


// import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';



const Homepage = () => {

  // inline style created as dict (keys: values)
  const imgStyle = {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    justifyContent: 'center'
  };

  const iconStyle = {
    margin: '0 8px',
  };

  return (
    <Container>
      <FlipContainer>
        <Block>
          <img src={profilePic} alt="Profile" style={imgStyle}/>
        </Block>
        <Block>
          <h1>Sarah Tao</h1>
        </Block>
        <Block>
          <a href="https://www.linkedin.com/in/sarahtao/">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} size="2x"/>
          </a>
          <a href="https://github.com/s-tao">
            <FontAwesomeIcon icon={faGithubSquare} style={iconStyle} size="2x"/>
          </a>
          <FontAwesomeIcon icon={faBuffer} style={iconStyle} size="2x"/>
        </Block>
      </FlipContainer>
    </Container>
  ); 
}

export default Homepage;