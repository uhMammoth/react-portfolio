import React from "react";


export default function ProjectCards(props){    
    return( 
        <a href={props.github}>
            <div className="projectCard">            
                <img src={`../assets/${props.fileName}`} alt={props.title} />
                <h2 className="project-title">{props.title}</h2>
                <p className="project-desc">{props.desc}</p>        
            </div> 
        </a>
    );
}