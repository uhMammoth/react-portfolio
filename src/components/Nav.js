import React from 'react';
import '../App.css';


export default function Nav({navState, handleNavState}){
    return (
        <nav>
            <ul id='nav-items'>
                <li><a href='#about' onClick={() => handleNavState('About')}>About</a></li>
                <li><a href='#portfolio' onClick={() => handleNavState('Portfolio')}>Portfolio</a></li>
                <li><a href='#contact' onClick={() => handleNavState('Contact')}>Contact</a></li>
                <li><a href='#resume' onClick={() => handleNavState('Resume')}>Resume</a></li>
            </ul>
        </nav>
    );
}
