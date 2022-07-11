import React, { useState} from "react";
import Project from './Project';

export default function Portfolio(){
    const [projects] = useState([
        {
            title: "Park Place",
            desc: "aaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaa",
            deployment: "https://park-place-association.herokuapp.com/",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "park-place.png",
        },
        {
            title: "Game Platforms",
            desc: "blah",
            deployment: "https://uhmammoth.github.io/GamePlatforms/",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: "game-platforms.png",
        },
        {
            title: "proj 1",
            desc: "blah",
            github: "https://github.com/uhMammoth/GamePlatforms",
            img: 'logo.svg',
        },
        {
            title: "Run Buddy",
            desc: "HTMl CSS project",
            deployment: "https://uhmammoth.github.io/RunBuddy/",
            github: "https://github.com/uhMammoth/RunBuddy",
            img: "run-buddy.png",
        },
    ]);
    const cards = projects.map((project, i) => {
        return (
            <Project
            key={i}
            {...project}
            />
        )        
        })
    return( 
        <main>                            
          <h1>Portfolio</h1>
          <div className="cards">
            {cards}
          </div>          
        </main> 
    );
}