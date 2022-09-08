import React from "react";
import './sidebar.css';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/square-github.svg';
import email from '../../assets/icons/envelope-solid.svg';
import pdf from '../../assets/icons/pdf-solid.svg';
import ResumeFile from '../../assets/Resume.pdf';

export default function Links(){
    return (
        <div id="sidebar">
            <div>
                <a href="https://github.com/uhMammoth"><img className="svg" src={github} alt="Github"/></a>
                <a href="www.linkedin.com/in/kyle-petty"><img className="svg" src={linkedin} alt="LinkedIn"/></a>
                <a href={ResumeFile} rel="noopener noreferrer" target="_blank"><img className="svg" src={pdf} alt="Resume"/></a>
                <a href="mailto:m.kylepetty@gmail.com"><img className="svg" src={email} alt="Email"/></a>
                <span> </span>
            </div>            
        </div>
    );
}