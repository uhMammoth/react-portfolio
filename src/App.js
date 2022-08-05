import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/mainComponents/AboutMe';
import Portfolio from './components/mainComponents/Portfolio';
import Contact from './components/mainComponents/Contact';
import Resume from './components/mainComponents/Resume';
import Welcome from './components/Welcome';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return(
    <>
    {loading === false ? (
      <div className="App">
        <Header />
        <Footer /> 
      </div>
    ) : (
      <Welcome />
    )}      
    </>
    
  );
}

    