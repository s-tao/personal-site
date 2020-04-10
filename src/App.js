import React, {useState} from 'react';

import bkgrd from './clouds-bg.jpg'
import { createGlobalStyle } from 'styled-components'
import Homepage from './components/Homepage';
import Nav from './components/Nav';
// import { Container } from './styled.js';
// import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';


const GlobalStyle = createGlobalStyle`
  body, #root {
    background-image: url(${bkgrd});
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    ${'' /* user-select: none; */}
  }
`;


function App() {
 

  return (
    // <Router>
    <>
    <GlobalStyle/>
    <Nav/>
    </>
    // </Router>
  );

}


export default App;



