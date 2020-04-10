import React, {useState} from 'react';

import Profile from './Profile';
import Intro from './Intro';
import {useSpring, animated as a} from 'react-spring';
import { Container } from '../styled.js';

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


  return (    
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <a.div className="flip" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <Intro/>
      </a.div>

      <a.div onClick={clickHandler} className="flip" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <Profile/>
      </a.div>
    </Container>

      
  ); 
}

export default Homepage;