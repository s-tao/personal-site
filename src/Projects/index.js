import React from 'react';
import Nav from '../Navbar';
import { Link } from 'react-router-dom';
import { ProjectContainer, ProjectChild, Container } from '../styled.js';


const Projects = () => {

  return (
    <>
      <Nav/>
      <Container>
        <ProjectContainer>
          <ProjectChild>
            <Link to="/projects/whats-my-care">
              <h3>What's My Care</h3>
              <p>
                Full stack web-app that allows users to find health insurance plans
              </p>
              </Link>
            <hr></hr>
            <a href="https://github.com/s-tao/whats-my-care" 
              className="alt-link">
              GITHUB
            </a>
          </ProjectChild> 
          <ProjectChild>
            <Link to="/projects/portfolio-website">
              <h3>Personal Website</h3>
              <p>
                Using React to create my own personal website showcasing all coding 
                projects
              </p>
              </Link>
            <hr></hr>
            <a href="https://github.com/s-tao/personal-site"              
              className="alt-link">
              GITHUB
            </a>
          </ProjectChild> 
        </ProjectContainer> 
      </Container>
    </>
  );
}

export default Projects;


