import React from 'react';
import './content.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import skills from '../../assets/skills.json';
import projects from '../../assets/projects.json';
import useWindowDimensions from '../../util/helper';
import project1 from '../../assets/images/game-platforms.png';

export default function Content(){
    const {height, width} = useWindowDimensions();
    return (
        <main>
            <header>
                {/* intro */}
                <div id='intro'>
                    <h1>Hi my name is Kyle Petty!</h1>
                    <h1>I'm a Full Stack Web Developer</h1>
                    <h2>Functionality and intuitiveness are the driving forces for every application I build! Currently learning additional languages to build on my bootcamp experience at UCR.</h2>
                </div> 
            </header>
            <section>
                {/* about me */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={200} duration={1}>
                <div id='aboutMe'>
                    <div className='sectionTitle'>about me</div>
                    <div className='sectionContent'>
                        <div>
                        <p>I'm currently an Engineer at Upstatement building things for the web with some awesome people. I recently graduated from Northeastern University after completing three awesome six-month co-ops at MullenLowe U.S., Starry, and Apple Music.</p><br/>
                        <p>As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. </p><br/>
                        <p>When I'm not in front of a computer screen, I'm probably snowboarding, cruising around on my penny board, or crossing off another item on my bucket list. </p>
                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
            </section>
            <section>
                {/* skills */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={200} duration={1}>
                    <div id='skills'>
                        <div className='sectionTitle'>skills</div>
                        <div className='sectionContent'>
                            {skills.map((skill) => {
                                return (<ul>
                                    <li>{skill.title}</li>
                                    {skill.list.map((s) => {
                                        return(<li>{s}</li>)
                                    })}
                                </ul>)
                            })}
                        </div>                
                    </div>
                </AnimationOnScroll>
            </section>
            <section>
                {/* projects */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={200} duration={1}>
                    <div id='projects'>
                        <div className='sectionTitle'>projects</div>                        
                        <div className='sectionContent'>
                            {projects.map((p, i) => {
                                return (<div className='project' key={i}>
                                    <img className='projectImg' src={require(`../../assets/images/${p.img}`)} alt=''/>
                                    <h3 className='projectTitle'>{p.title}</h3>
                                    <p className='projectDesc'>{p.desc}</p>
                                    <div>
                                        {p.used.map((u, i) => {
                                            return (
                                                <span className='projectUsed'>{u}</span>
                                            )
                                        })}
                                    </div>
                                    <div className='projectIcons'>
                                        <a href={p.github}>
                                            <img className='icon' src={require('../../assets/icons/github.png')}/>
                                        </a> 
                                        <a href={p.deployment}>
                                            <img className='icon rightArrow' src={require('../../assets/images/right-arrow.png')}/>
                                        </a>
                                    </div>
                                </div> )
                            })}
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section>
                {/* education */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={200} duration={1}>
                    <div id='education'>
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
                    </div>
                </AnimationOnScroll>
            </section>
        </main>
    );
};
