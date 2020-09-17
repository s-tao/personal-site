import React from 'react';

import { createGlobalStyle } from 'styled-components'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
// import { Container } from './styled.js';
// import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';


const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }
`;


function App() {
 
  return (
    <>
      <Nav/>
      <GlobalStyle/>
    </>
  );
}


export default App;



