import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Mainpage from './Mainpage';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';




const App = () => {
  return (
    <div className="App">
      <Header/>
      <Mainpage />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;