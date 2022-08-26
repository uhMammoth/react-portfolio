import React from "react";
import github from '../../icons/github.svg';


export default function Project(props){
    return(
        <a className="card" href={props.deployment}>
            <div>
                <a href={props.github} className="github"><img src={github} alt={props.github}/></a> 
                <h2 className="card-title">{props.title}</h2>
                <p className="card-desc">{props.desc}</p>                               
            </div>        
            <img className="card-img" src={require(`../../images/${props.img}`)} alt={props.title}/>
        </a>
    );
};