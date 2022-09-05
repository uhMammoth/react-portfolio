import './assets/style.css'
import React from "react";
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import Project from './components/projects/Project';
import Resume from './components/Resume';
import Intro from './components/intro/Intro';
import AboutMe from './components/aboutme/AboutMe';
import Sidebar from './components/sidebar/Sidebar';

export default function App() {

  return(        
    <>          
      <Sidebar/>
      <div className='main'>
        <Nav />      
        <Intro/>
        <AboutMe/>
        <Project />
        <Resume />
        <Footer /> 
      </div>      
    </>
  );
}
    