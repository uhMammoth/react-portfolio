import React from "react";

export default function Footer(){
    const profiles = [
        {
            media: "github",
            link: "https://github.com/uhMammoth",
            icon: "github.svg"
        },
        {
            media: "github",
            link: "https://github.com/uhMammoth",
            icon: "github.svg"
        },
        {
            media: "github",
            link: "https://github.com/uhMammoth",
            icon: "github.svg"
        },
    ]
    const footer = profiles.map((profile, i) => {
        return (
            <img src={require(`../icons/${profile.icon}`)} alt={profile.media}></img>
        )        
        })
    return (
        
        <footer>
            {footer}
        </footer>
    );    
}