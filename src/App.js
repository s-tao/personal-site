import React, {useState} from 'react';

import bkgrd from './clouds-bg.jpg'
import { createGlobalStyle } from 'styled-components'
import Homepage from './components/Homepage';
import Profile from './components/Profile';

import {useSpring, animated as a} from 'react-spring';
import './App.css';


const GlobalStyle = createGlobalStyle`
  body, #root {
    background-image: url(${bkgrd});
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    user-select: none;
  }
`;



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

  
  return (
    <>
    <GlobalStyle/>
      <div onClick={clickHandler}>
        <a.div className="flip" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          <Homepage/>
        </a.div>
        <a.div className="flip" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <Profile/>
        </a.div>
      </div>
    </>
  )

}


export default App;



