import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faBuffer } from '@fortawesome/free-brands-svg-icons'
import profilePic from '../prof-pic.jpg' 
import '../Homepage.css';

// import Fade from 'react-reveal/Fade';

// import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';


const Homepage = ({clickHandler}) => {
    return (
        // <Fade>
          <Container fluid className="homepage-info">
            
            <Row>
              <Col md={12}>
                <Row className="justify-content-md-center">
                  <Col md="auto" className="center-flex">
                    <img src={profilePic} alt="Profile" 
                                          className="profile-img" 
                                          onClick={clickHandler}/>
                  </Col>
                </Row>
                <Row>
                  <Col md="auto" className="center-flex">
                    <h1>Sarah Tao</h1>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col md="auto" className="center-flex">
                    <a href="https://www.linkedin.com/in/sarahtao/">
                      <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                  </Col>
                  <Col md="auto" className="center-flex">
                    <a href="https://github.com/s-tao">
                      <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                    </a>  
                  </Col>
                  <Col md="auto" className="center-flex">
                    <FontAwesomeIcon icon={faBuffer} size="2x"/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        // </Fade>
      ); 
}

export default Homepage;