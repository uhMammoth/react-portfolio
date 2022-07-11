import React from 'react';
import '../App.css';
import Nav from './Nav';

export default function Header({navState, handleNavState}){
    return (
        <header>
            <h1>Kyle Petty</h1>            
            <Nav navState={navState} handleNavState={handleNavState}/>
        </header>
    );
}