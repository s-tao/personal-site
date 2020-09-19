import React from 'react';
// import { createGlobalStyle } from 'styled-components'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';

// const GlobalStyle = createGlobalStyle`
//   #root {
//     margin: 0;
//     padding: 0;
//     height: 100vh;
//     overflow: hidden;
//   }
// `;


function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/projects/portfolio-website" component={PortfolioWebsite} />
        <Route path="/projects/whats-my-care" component={WhatsMyCare} /> */}
      </Switch>
    </Router>
  );
}


export default App;



