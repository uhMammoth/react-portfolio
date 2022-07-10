import React, { useState} from "react";

export default function Portfolio(props){
    const projects = useState([
        {
            title: "proj 1",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "logo.svg",
        },
        {
            title: "proj 2",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "logo.svg",
        },
        {
            title: "proj 1",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: 'logo.svg',
        },
        {
            title: "proj 1",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "logo.svg",
        },
        {
            title: "proj 1",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "logo.svg",
        },
    ]);
    return( 
        <main>                            
          Portfolio
        {/* <a href={props.github} className="projectCard">
            <img src={require(`../../../public/images/${props.img}`)} alt={props.title} />
            <div>                            
                <h2 className="project-title">{props.title}</h2>
                <p className="project-desc">{props.desc}</p>        
            </div> 
        </a> */}
        </main> 
    );
}