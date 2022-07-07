import React from "react";

export default function ProjectCards(props){        
    return( 
        <a href={props.github} className="projectCard">
            <img src={require(`../../public/images/${props.img}`)} alt={props.title} />
            <div>                            
                <h2 className="project-title">{props.title}</h2>
                <p className="project-desc">{props.desc}</p>        
            </div> 
        </a>
    );
}