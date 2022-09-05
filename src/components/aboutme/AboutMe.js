import React from "react";
import '../../assets/style.css';
import './aboutMe.css';

export default function AboutMe(){
    
    return (
        <div id="about-me">
              <img src={require('../../assets/images/pfp.jpg')} alt='profile'/>
              <p>Full stack web developer frequently learning new technologies to apply both professionally and in personal projects. Motivated by previous customer service experience to design intuitive apps for a frustration free customer experience. Recently earned a certificate in full stack development from UCR Bootcamp Extension. Known to always find issues to improve upon and with each project becoming more efficient. Excels at focusing on the overall scope of the project and keeping an open perspective. Eager to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. </p>
        </div>
    );    
}