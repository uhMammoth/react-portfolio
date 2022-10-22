import React from 'react';
import './footer.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Nav(){
    
    return (  
        <div id='navbar'>
            <section className='created'>                
                <p>Created by Kyle Petty 2022</p>
            </section>
            <section >
                <div className='socialMedia'>
                    <a href="https://github.com/uhMammoth">Github</a>
                    <a href="https://www.linkedin.com/in/kyle-petty">LinkedIn</a>
                    <a href={require('../../assets/Resume.pdf')} rel="noopener noreferrer" target="_blank">Resume</a>  
                    <a href="mailto:m.kylepetty@gmail.com">email</a>
                </div>
            </section>            
        </div>
    );
}
