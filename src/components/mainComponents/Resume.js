import React from "react";
import ResumeFile from '../../assets/Resume.pdf';


export default function Resume(){
    return(
        <div>
            <a href={ResumeFile} rel="noopener noreferrer" target="_blank">Download Resume</a>
            <section>
            TECHNICAL SKILLS

            JavaScript ES6+, CSS, HTML 5, SQL, NoSQL, Github, MongoDB, MySQL, Express.js, React.js, Node.js, jQuery, Bootstrap, Handlebars

            </section>
            <section>
            EDUCATION

            Certificate in Full Stack Web Development
            University California Riverside Bootcamp Ext
            Riverside, CA
            FEBRUARY 2022 - JULY 2022

            Associates in Computer Science
            Chaffey Community College
            Rancho Cucamonga CA
            AUGUST 2017 - MAY 2022

            </section>
            <section>
            EXPERIENCE

            Facility Administrator
            First Service Residential
            Ontario, CA
            June 2017 - Present
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

            </section>
        </div>
    );
};