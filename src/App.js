import './App.css';
import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Page from './pages/Page';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return(
    <>
    {loading === false ? (
      <div className="App">
        <Nav />
        <Page />
        <Footer /> 
      </div>
    ) : (
      <Welcome />
    )}      
    </>
    
  );
}

    