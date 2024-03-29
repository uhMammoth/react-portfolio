import React from 'react';
import './content.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import skills from '../../assets/skills.json';
import projects from '../../assets/projects.json';

export default function Content(){
    const offset = 100;
    return (
        <main>
            <header>
                {/* intro */}
                <div id='intro'>                    
                    <h1>Hi my name is Kyle Petty!<br/>I'm a Full Stack Web Developer</h1>
                </div> 
            </header>
            <section>
                {/* about me */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' offset={offset} delay={200} duration={1}>
                <div id='aboutMe'>
                    <div className='sectionTitle'>about me</div>
                    <div className='sectionContent'>
                        <div className='aboutMe'>
                            <p>I recently finished a 24-week bootcamp at UCR which helped me improve my preexisting knowledge of HTML and CSS and has now made me into a full stack capable web developer.</p><br/>
                            <p>What motivates me when I design a website is the chance to take the image in my head and make it real. My goal is to create intuitive applications making user navigation a smooth transition to where they need to go. I'm very interested in also learning automation, which is why my next goal is currently learning Python.
                            </p><br/>
                            <p>When I'm not in front of a computer screen, I like to go camping, riding my motorcycle to discover new locations in SoCal, or getting motivated by a couple youtube videos to start another hobby.</p>
                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
            </section>
            <section>
                {/* skills */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' offset={offset} delay={200} duration={1}>
                    <div id='skills'>
                        <div className='sectionTitle'>skills</div>
                        <div className='sectionContent'>
                            <div className='list'>
                                {skills.map((skill) => (
                                    <ul className='skillsList'>
                                        <li className='skillTitle'>{skill.title}</li>
                                        {skill.list.map((s) => (
                                            <li className='skill'>{s}</li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>                
                    </div>
                </AnimationOnScroll>
            </section>
            <section>
                {/* projects */}
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' offset={offset} delay={200} duration={1}>
                    <div id='projects'>
                        <div className='sectionTitle'>projects</div>                        
                        <div className='sectionContent'>
                            {projects.map((p, i) => {
                                return (<div className='project' key={i}>
                                    <img className='projectImg' src={require(`../../assets/images/${p.img}`)} alt=''/>
                                    <h3 className='projectTitle'>{p.title}</h3>
                                    <p className='projectDesc'>{p.desc}</p>
                                    <ul className='projectUsed'>
                                        {p.used.map((u, i) => (
                                            <li className='used' key={i}>{u}</li>
                                        ))}
                                    </ul>
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
                <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' offset={offset} delay={200} duration={1}>
                    <div id='education'>
                        <div className='sectionTitle'>achievements</div>
                        <div className='sectionContent'>
                            <div className='achievements'>
                                <div className='achievement'>
                                    <span className='degree'>Certificate in Full Stack Web Development</span>
                                    <span className='school'>University California Riverside Bootcamp Ext</span>
                                    <span className='location'>Riverside, CA</span>
                                    
                                    <span className='earned'>July 2022</span>
                                </div>
                                <div className='achievement'>
                                    <span className='degree'>Associates in Computer Science</span>
                                    <span className='school'>Chaffey Community College</span>
                                    <span className='location'>Rancho Cucamonga, CA</span>
                                    
                                    <span className='earned'>May 2022</span>                            
                                </div>
                                <div className='achievement'>
                                    <span className='degree'>Eagle Scout</span>
                                    <span className='school'>Boy Scouts of America, Troop 601</span>
                                    <span className='location'>Upland, CA</span>
                                    
                                    <span className='earned'>June 2014</span>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
        </main>
    );
};
