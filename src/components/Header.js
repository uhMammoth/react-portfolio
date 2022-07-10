import React from 'react';
import '../App.css';
import Nav from './Nav';

export default function Header({navState, handleNavState}){
    return (
        <header>
            <h2>Kyle</h2>            
            <Nav navState={navState} handleNavState={handleNavState}/>
        </header>
    );
}