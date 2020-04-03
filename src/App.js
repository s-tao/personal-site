import React, {useState} from 'react';
// import { Container, Row, Col } from 'react-bootstrap'
// import profilePic from './prof-pic.jpg' 

import Homepage from './components/Homepage';
import Profile from './components/Profile';
import {useSpring, animated as a} from 'react-spring';
import './App.css';


function App() {

  const [aboutMe, setAboutMe] = useState(false);

  const clickHandler = () => {
    
    setAboutMe(!aboutMe)
  }

  const {transform, opacity} = useSpring({
    opacity: aboutMe ? 1 : 0,
    transform: `perspective(600px) rotateX(${aboutMe ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80}
  })

  // const AnimatedHomepage = animated(Homepage)
  // const AnimatedProfile = animated(Profile)
  
  return (
    <div onClick={clickHandler}>
      <a.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <Homepage/>
      </a.div>
      <a.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
       <Profile/>
      </a.div>
    </div>
  )

}


export default App;



