import React, {useState, useEffect} from 'react';
import './nav.css';

export default function Nav(){
    const [winPosition, setWinPos] = useState(0);
    useEffect(() => {
        const updatePos = () => {
            setWinPos(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePos);
        updatePos();
        const nav = document.querySelector("#navbar");
        return () => window.removeEventListener('scroll', updatePos);
        
    }, []);

    return (          
        <div id='navbar' className={winPosition > 0 ? "sticky" : ""}>
            <ul id='nav-items'>
                <li><a href='#about-me'>About</a></li>
                <li><a href='#projects'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>                
            </ul>
        </div>
    );
}