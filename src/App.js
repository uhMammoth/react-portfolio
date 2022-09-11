import './assets/style.css'
import React from "react";
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import "animate.css/animate.min.css";
import arrow from './assets/icons/arrow.png';


export default function App() {

  return(        
    <>          
      <Nav />
      <Content /> 
      <a id='topOfPage' href='#'><img src={arrow} alt='go to top of page'/></a>   
    </>
  );
}
    