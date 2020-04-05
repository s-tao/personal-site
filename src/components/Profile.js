import React from 'react';
import { FlipContainer } from '../styled.js';


const Profile = () => {
  const justifyText = {
      textAlign: 'justify',
      fontSize: '14px'
  }

  return (
      <FlipContainer style={justifyText}>
        <p>
          Working as a Landscape Designer, I immediately gravitated towards the 
          minute design and details of how things were constructed. I used 
          AutoCAD on a daily basis to draft out plans and details, Sketchup
          to model our designs, and Adobe Suite to render marketing images.
          Although I enjoyed working with various applications, I gradually 
          became more interested in how these programs were created to help
          me as the user.
        <br></br><br></br>
          Eventually, I began entertaining different ways I can help 
          improve people's lives through creating programs myself. So... I made 
          the switch through joining Hackbright Academy, an all female coding 
          bootcamp! I am excited to continue learning by doing! This site 
          consists of all the projects I've worked on through my journey as 
          a Software Engineer.
        </p>
      </FlipContainer>
      
  );
}

export default Profile;

