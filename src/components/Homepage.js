import React, {useState} from 'react';

import profilePic from '../prof-pic.jpg'; 
import { FlipContainer, Block, Container } from '../styled.js';
import Profile from './Profile';
import {useSpring, animated as a} from 'react-spring';

const Homepage = () => {

  const [aboutMe, setAboutMe] = useState(false);

  const clickHandler = () => {
    setAboutMe(!aboutMe)
  }

  const {transform, opacity} = useSpring({
    opacity: aboutMe ? 1 : 0,
    transform: `perspective(1200px) rotateX(${aboutMe ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80}
  })


  // inline style created as dict (keys: values)
  const imgStyle = {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    justifyContent: 'center'
  };


  return (    
    <Container>
      <a.div className="flip" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
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
      </a.div>

      <a.div onClick={clickHandler} className="flip" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <Profile/>
      </a.div>
    </Container>

      
  ); 
}

export default Homepage;