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
                TECHNICAL SKILLS

                JavaScript ES6+, CSS, HTML 5, SQL, NoSQL, Github, MongoDB, MySQL, Express.js, React.js, Node.js, jQuery, Bootstrap, Handlebars
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
                <div className='sectionContent'>
                EDUCATION

                Certificate in Full Stack Web Development
                University California Riverside Bootcamp Ext
                Riverside, CA
                FEBRUARY 2022 - JULY 2022

                Associates in Computer Science
                Chaffey Community College
                Rancho Cucamonga CA
                AUGUST 2017 - MAY 2022
                </div>
            </section>
        </main>
    );
};
