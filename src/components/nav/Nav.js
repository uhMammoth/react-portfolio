import React, {useState, useEffect} from 'react';
import './nav.css';

export default function Nav(){

    return (          
        <div id='navbar'>
            <ul id='nav-items'>
                <li><a href='#about-me'>About</a></li>
                <li><a href='#projects'>Portfolio</a></li>
                <li><a href={require('../../assets/Resume.pdf')} rel="noopener noreferrer" target="_blank">Resume</a></li>
                <li><a href='#contact'>Contact</a></li>                
            </ul>
        </div>
    );
}