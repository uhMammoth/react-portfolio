import React, { useState} from "react";
import Project from './Project';
import projects from '../assets/projects.json'

export default function Portfolio(){
    const cards = projects.map((project, i) => {
        return (
            <Project
            key={i}
            {...project}
            />
        )        
        })
    return( 
        <div id="projects">                            
          <h1>Portfolio</h1>
          <div className="cards">
            {cards}
          </div>          
        </div> 
    );
}