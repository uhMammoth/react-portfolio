import React from "react";
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/square-github.svg';
import email from '../../assets/icons/envelope-solid.svg';
import pdf from '../../assets/icons/pdf-solid.svg';
import ResumeFile from '../../assets/Resume.pdf';
import './footer.css';

export default function Footer(){
    return(
        <div id="footer">
            <p>Created by Kyle Petty 2022</p>
            <ul>
                <li><a href="https://github.com/uhMammoth">GITHUB</a></li>
                <li><a href="www.linkedin.com/in/kyle-petty">LINKEDIN</a></li>
                <li><a href={ResumeFile} rel="noopener noreferrer" target="_blank">RESUME</a></li>
                <li><a href="mailto:m.kylepetty@gmail.com">EMAIL</a></li>
            </ul>
        </div>
    );   
}