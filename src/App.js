import React, {useState} from 'react';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import './App.css';



function App() {

  const [aboutMe, setAboutMe] = useState(false);
  const clickHandler = () => {
    // ! change it to something that is not this - boolean so switch btwn t or f
    setAboutMe(!aboutMe)
  }
  
  if (aboutMe) {
    return <Profile clickHandler={clickHandler}/>;
  }
    return <Homepage clickHandler={clickHandler}/>;

}


export default App;



