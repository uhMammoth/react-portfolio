import React from 'react';
import './content.css';

export default function Content(){
    return (
        <main>
            <section id='introduction'>
                <h1>Hi</h1>
                <h1>I'm <b>Kyle Petty</b></h1>
            </section>
            <section id='aboutMe'>
                <div className='sectionTitle'>About Me</div>
                <div className='sectionContent'>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                </div>                
            </section>
            <section id='skills'>
                <div className='sectionTitle'>Skills</div>
                <div className='sectionContent'>

                    <ul>

                    </ul>
                </div>                
            </section>
            <section id='projects'>
                <div className='sectionTitle'>Projects</div>
                <div className='sectionContent'></div>
            </section>
            <section id='education'>
                <div className='sectionTitle'>Education</div>
                <div className='sectionContent'></div>
            </section>
        </main>
    );
};
