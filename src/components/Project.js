import React, {useState} from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ProjectContainer, ProjectChild, Container, Block } from '../styled.js';
import WhatsMyCare from './WhatsMyCareProj.js';

const Project = () => {

  // const [project, setProjectType] = useState([]);
  // const [project, setProjectType] = useState(false);

  // const clickHandler = () => {

  // }

  

  return (
    <Container>
      <Block style={{width: '100%', margin: '5px', height: '75px'}}>
        <h1 style={{color: 'white'}}>Project Works</h1>  
      </Block>
      <ProjectContainer>
        <ProjectChild>
          <h3>What's My Care</h3>
          <p>Full stack web-app that allows users to find health insurance plans</p>
        </ProjectChild> 
      </ProjectContainer> 
    </Container>


  );
}

export default Project;



/* <Link to="/projects/whats-my-care">
      <h3>What's My Care</h3>
    </Link> */
/* <Router>
  <Switch>
    <Route path="/projects/whats-my-care">
      <WhatsMyCare/>
    </Route>
  </Switch>
</Router> */