import './App.css';
import './assets/style.css'
import React, { useEffect, useState } from "react";
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import Portfolio from './components/projects/Portfolio';
import Resume from './components/Resume';
import Intro from './components/Intro';
import AboutMe from './components/aboutme/AboutMe';
import Links from './components/Links';

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [desktop, setDesktop] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if(width > 768) {
      setDesktop(true);
    }
  }, [width])

  return(
    <>
      {desktop ? (
        <>          
          <Nav />
          <Links/>
          <Intro/>
          <AboutMe/>
          <Portfolio />
          <Resume />
          <Footer /> 
        </>
      ):(
        <>
          {/* <Nav />
          <Intro/>
          <AboutMe/>
          <Portfolio />
          <Resume />
          <Footer />   */}
        </>
      )}  
    </>    
  );
}
// nav, intro, about me, education, projects, get in touch
    