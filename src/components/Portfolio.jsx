import React from 'react'
import '../assets/styles/portfolio.css'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    
    return (
        <section className='portfolio-container'>
            <h1 className='text-shadow-white'>PORTFOLIO</h1>

            <div className='portfolio-card'>
               number
            </div>

            <div className='portfolio-card'>
               number
            </div>

            <div className='portfolio-card'>
               number
            </div>

            <div className='portfolio-card'>
               number
            </div>

            <div className='portfolio-card'>
               number
            </div>

            <div className='portfolio-card'>
               number
            </div>

        <div className='say-hi'>
            Did you love it?
            <br/>
            {/* Include link to contact page */}
            Then say hi.
        </div>

        <div className='arrow-down'>
            <FontAwesomeIcon icon={faArrowDownLong} />
            </div>
        </section>
    )
}
