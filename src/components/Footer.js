import React from "react";

export default function Footer(){
    const profiles = [
        {
            media: "github",
            link: "https://github.com/uhMammoth",
            icon: "github.svg"
        }
    ]
    const footer = profiles.map((profile, i) => {
        return (
            <a key={i} href={profile.link}><img src={require(`../icons/${profile.icon}`)} alt={profile.media}></img></a>
        )        
        })
    return (
        
        <footer>
            {footer}
        </footer>
    );    
}