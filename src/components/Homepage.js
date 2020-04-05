import React from 'react';

import profilePic from '../prof-pic.jpg'; 
import { FlipContainer, Block } from '../styled.js';
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


  return (    
      <FlipContainer>
        <Block>
          <img src={profilePic} alt="Profile" style={imgStyle} />
        </Block>
        <Block>
          <h1>Sarah Tao</h1>
        </Block>
        <Block>
          <p style={{fontSize: '20px', margin: '0'}}><em>Software Engineer</em></p>
        </Block>
      </FlipContainer>
  ); 
}

export default Homepage;