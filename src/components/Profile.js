import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faGithubSquare, faBuffer } from '@fortawesome/free-brands-svg-icons'
// import profilePic from '../prof-pic.jpg' 
// import '../Homepage.css';

// import Fade from 'react-reveal/Fade';

const Profile = () => {
// const Profile = () => {
    const justifyText = {
        textAlign: 'justify'
    }

    return (
        <Container fluid className="homepage-info">  
          <Row className="center-flex" 
              //  onClick={clickHandler}
               > 
            <Col md={7} className="center-flex" style={justifyText}>
              <p>
                I was a Landscape Designer at a firm in Marin for almost three 
                years. During that time, I immediately gravitated towards the 
                minute design and details of how things were constructed. I used 
                AutoCAD on a daily basis to draft out plans and details, Sketchup
                to model our designs, and Adobe Suite to render marketing images.
                Although I enjoyed working with various applications, I gradually 
                became more interested in how these programs were created to help
                me as the user.
              <br></br><br></br>
                Through a series of other events, the idea that I could program 
                slowly grew. I began entertaining different ways I can help 
                improve people's lives. So... I made the switch through joining 
                Hackbright Academy, an all female coding bootcamp! I am excited 
                to continue learning and creatingthings that can improve one's 
                quality of life in the digital space!
              </p>
            </Col>
          </Row>
        </Container>
        
    );
}

export default Profile;

