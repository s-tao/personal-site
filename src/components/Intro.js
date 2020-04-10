import React from 'react';
import { FlipContainer, Block } from '../styled.js';
import profilePic from '../prof-pic.jpg'; 


const Intro = () => {
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
        <Block>
          <p>satao.94@gmail.com</p>
        </Block>
      </FlipContainer>
      
  );
}

export default Intro;

