import React, {useState} from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ProjectContainer, ProjectChild, Container, Block } from '../styled.js';
import WhatsMyCare from './WhatsMyCareProj.js';
import PortfolioWebsite from './PortfolioWebsite.js';



const Project = () => {
  const [selectProject, setSelectProject] = useState(null);

  // const clickHandler = () => {
  //   setSelectProject(true)
  //   console.log(setSelectProject)
  // }
  if (selectProject === 'WMC') {
    return <WhatsMyCare/>
  }
  if (selectProject === 'Portfolio') {
    return <PortfolioWebsite/>
  }


  return (
    <Container>
      {/* <Block style={{width: '100%', margin: '5px', height: '75px'}}> */}
        {/* <h1 style={{color: 'white'}}>Project Works</h1>   */}
      {/* </Block> */}
      <ProjectContainer>
        <ProjectChild>
          <div onClick={() => setSelectProject('WMC')}>
            <h3>What's My Care</h3>
            <p>
              Full stack web-app that allows users to find health insurance plans
            </p>
          </div>
          <hr></hr>
          <a href="https://github.com/s-tao/whats-my-care">GITHUB</a>

          {/* {selectProject === 'WMC' && <WhatsMyCare/>} */}
          {/* {selectProject ? <WhatsMyCare selected={selectProject}/> : null} */}
        </ProjectChild> 
        <ProjectChild>
          <div onClick={() => setSelectProject('Portfolio')}>
            <h3>Personal Website</h3>
            <p>
              Using React to create my own personal website showcasing all coding 
              projects
            </p>
          </div>
          <hr></hr>
          <a href="https://github.com/s-tao/personal-site">GITHUB</a>
          {/* {selectProject === 'Project' && <PortfolioWebsite/>} */}

          {/* {showProject ? <PortfolioWebsite/> : null} */}

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