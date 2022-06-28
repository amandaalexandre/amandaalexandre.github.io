import React from 'react'
import '../assets/styles/footer.css'
import {Link} from 'react-router-dom'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <footer>

            <section className='follow-me'>
                <h2 className='follow'>let's make great</h2>
                <h2 className='me'>websites together</h2>
            </section>

            <section className='disclaimer'>
            
        {/* Navigation section */}
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>       
            
            
        </nav>

                            {/* Socials Section */}
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/amanda-vieira-016468211/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>

                    <a href="https://github.com/amandaalexandre">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
        
                </div>

                
                If you want to have a conversation about possible projects, 
                please feel free <a href="https://www.linkedin.com/in/amanda-vieira-016468211/">to reach me through LinkedIn</a>.
                <br/>
                <br/>
                This is an original template created by me. 
                If you decide to use it for your own portfolio, 
                please provide credits to <a href="https://github.com/amandaalexandre">my Github page</a>.
            </section>


            <section className='bar'>
                <hr/>
            Layout by <a href="https://github.com/amandaalexandre">Amanda Alexandre</a>
            </section>

        </footer>
    )
}
