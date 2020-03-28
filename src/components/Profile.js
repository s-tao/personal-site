import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faBuffer } from '@fortawesome/free-brands-svg-icons'
import profilePic from '../prof-pic.jpg' 
import Fade from 'react-reveal/Fade';


const Profile = ({clickHandler}) => {
    return (
        <Container fluid className="homepage-info">
            <Row className="justify-content-md-center">
              <Col md="auto">
                <img src={profilePic} alt="Profile" 
                                      className="profile"
                                      onClick={clickHandler}

                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h1>Sarah Tao</h1>
                <p>Description of myself here</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <a href="https://www.linkedin.com/in/sarahtao/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
              </Col>
              <Col md="auto">
                <a href="https://github.com/s-tao">
                  <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                </a>  
              </Col>
              <Col md="auto">
              {/* attach click event to project to display new component that shows profile desc. */}
                <FontAwesomeIcon icon={faBuffer} size="2x"/>
              </Col>
            </Row>
          </Container>
    );
}

export default Profile;

