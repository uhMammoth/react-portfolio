import React from 'react';
import '../App.css';

export default function SideBar(){
    return (          
        <nav>
            <ul id='nav-items'>
                <li><a href='#about-me'>About</a></li>
                <li><a href='#projects'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>                
            </ul>
        </nav>
    );
}