import React from 'react'
import { HashLink } from 'react-router-hash-link'

// importing styles
import '../assets/styles/titles.css'
import '../assets/styles/skills.css'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
    

    return (
        <section className='skills-container' id="skills">
            <h1><span className='title-white'>MY</span> <span className='text-shadow-black'>SKILLS</span></h1>
            
            <div className='hard-skills'>
            <h3>hard skills</h3>
            <br/>
            <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>CSS</li>
                <li>jQuery</li>
            </ul>
            </div>

            <div className='soft-skills'>
            <h3>soft skills</h3>
            <br/>
            <ul>
                <li>Fluent English</li>
                <li>Scrum</li>
                <li>Kanban</li>
            </ul>
            </div>

            <HashLink smooth to='#projects' className='arrow-down' >
                <FontAwesomeIcon icon={faArrowDownLong} />
            </HashLink>
        
        </section>
    )
}
