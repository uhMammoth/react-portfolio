import React from 'react';
import '../../assets/style.css';
import './nav.css';

export default function Header({navState, handleNavState}){
    return (          
        <>
            <ul id='nav-items'>
                <li><a href='#about-me'>About</a></li>
                <li><a href='#projects'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>                
            </ul>
        </>
    );
}