import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/mainComponents/AboutMe';
import Portfolio from './components/mainComponents/Portfolio';
import Contact from './components/mainComponents/Contact';
import Resume from './components/mainComponents/Resume';

export default function App() {
  const [navState, setNavState] = useState('About');
  const renderPage = () => {
    if (navState === 'About') {
      return <AboutMe />
    } else if (navState === 'Portfolio') {
      return <Portfolio />
    } else if (navState === 'Contact') {
      return <Contact />
    } else if (navState === 'Resume') {
      return <Resume />
    }
  };
  const handleNavState = (page) => setNavState(page);
  return(
    <div className="App">
        <Header navState={navState} handleNavState={handleNavState}/>
        {renderPage()}        
        <Footer /> 
    </div>
  );
}

    