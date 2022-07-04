import React from 'react'
import '../assets/styles/portfolio.css'
import portfolioData from "../portfolioData";
import Project from './Project';
import { HashLink } from 'react-router-hash-link'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {

    // using map to list projects using the Project component
   const projects = portfolioData.map(project => {
      return <Project
                key={project.id}
                {...project} 
              />
    })
    
    return (
        <section className='portfolio-container' id="projects">
            <h1 className='text-shadow-white'>PORTFOLIO</h1>
            {projects}       
        <div className='say-hi'>
            If you liked it,
            &nbsp;
            {/* Include link to contact page */}
            <HashLink smooth to='#contact' id="say-hi-link">
                say hi.
            </HashLink>
           
        </div>

        <div className='arrow-down'>
        <HashLink smooth to='#contact' >
            <FontAwesomeIcon icon={faArrowDownLong} />
        </HashLink>
            </div>
        </section>
    )
}
