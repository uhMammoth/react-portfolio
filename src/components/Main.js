import React from "react";
import Project from "./Project";
import data from "../assets/data";

export default function Main(){
    const projectCards = data.map(item => {
        return(
            <Project 
                {...item}
            /> 
        )
    })
    return(
        <main>    
            <section className="projects">
                {projectCards}
            </section>                   
            <p>content</p>
        </main>
    );
}