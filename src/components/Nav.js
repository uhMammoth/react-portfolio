import React from 'react';
import '../App.css';

export default function Nav(props){
    return (
        <nav>
            <ul className='nav-items'>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact Me</li>
                <li>Resume</li>
            </ul>
        </nav>
    );
}
