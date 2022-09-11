import React from 'react';
import './content.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import skills from '../../assets/skills.json';

export default function Content(){
    console.log(skills);
    return (
        <main>
            <section id='intro'>
                <div>
                    <h1>Hi my name is Kyle Petty!</h1>
                    <h1>I'm a Full Stack Web Developer</h1>
                    <h2>Functionality and intuitiveness are the driving forces for every application I build! Currently learning additional languages to build on my bootcamp experience at UCR.</h2>
                </div>         
            </section>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' delay={100} duration={0.5}>
                <section id='aboutMe'>
                    <div className='sectionTitle'>about me</div>
                    <div className='sectionContent'>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>                
                </section>                
            </AnimationOnScroll>          
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' delay={100} duration={0.5}>
                <section id='skills'>
                    <div className='sectionTitle'>skills</div>
                    <div className='sectionContent'>
                    TECHNICAL SKILLS

                    JavaScript ES6+, CSS, HTML 5, SQL, NoSQL, Github, MongoDB, MySQL, Express.js, React.js, Node.js, jQuery, Bootstrap, Handlebars
                        <ul>
                            <li>technical skills</li>

                        </ul>
                    </div>                
                </section>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' delay={100} duration={0.5}>
                <section id='projects'>
                    <div className='sectionTitle'>projects</div>
                    <div className='sectionContent'></div>
                </section>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true' delay={100} duration={0.5}>
                <section id='education'>
                    <div className='sectionTitle'>education</div>
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
            </AnimationOnScroll>            
        </main>
    );
};
