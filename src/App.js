import './assets/style.css'
import React from "react";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
// import Project from './components/projects/Project';
// import Resume from './components/experience/Resume';
// import Intro from './components/intro/Intro';
// import AboutMe from './components/aboutme/AboutMe';
import Content from './components/content/Content';

export default function App() {

  return(        
    <>          
      <Nav />
      <Content />
      {/* <div className='content'>              
        <Intro/>
        <AboutMe/>
        <Project />
        <Resume />        
      </div> */}
      <Footer />     
    </>
  );
}
    