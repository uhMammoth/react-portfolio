import React from 'react';
import './nav.css';


export default function Nav(){
    
    return (  
        <div id='navbar'>
            <section className='navItems'>
                <div>
                    <a href='#aboutMe'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#education'>Education</a>
                    <a href='#contact'>Contact</a>   
                    <a href={require('../../assets/Resume.pdf')} rel="noopener noreferrer" target="_blank">Resume</a>                                
                </div>
            </section>
            <section className='socialMedia'>
            <div>
                <a href="https://github.com/uhMammoth">Github</a>
                <a href="www.linkedin.com/in/kyle-petty">LinkedIn</a>
                <a href={require('../../assets/Resume.pdf')} rel="noopener noreferrer" target="_blank">Resume</a>  
                <a href="mailto:m.kylepetty@gmail.com">email</a>
            </div>
            </section>
            <section>                
                <p>Created by <br/> Kyle Petty<br/> 2022</p>
            </section>
        </div>
    );
}