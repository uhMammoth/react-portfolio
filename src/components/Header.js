import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Nav from './Nav';

export default function Header(props){
    return (
        <header>
            <img src={logo} className="nav-logo" alt="logo" />
            <h2>
                Kyle
            </h2>            
            <Nav />
        </header>
    );
}