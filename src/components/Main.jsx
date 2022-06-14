import React from 'react'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

// importing styles
import '../assets/styles/main.css'
import '../assets/styles/text-white.css'
import '../assets/styles/button.css'

export default function Main() {
    return (
        <main>
            <div className='main-container'>
                <h1>AMANDA <span className='text-white'>ALEXANDRE</span></h1>
                <h2>FULL STACK DEVELOPER</h2>
                <p className='text-block'>Junior Full Stack Developer in love with interactive interfaces. Projects include creating and consuming APIs, Javascript, React, database queries and Node.js.  
                </p>

                {/* Include links to CV and Skills component */}
                <span>
                    <button className='link-button'>see what I can do</button>
                    <button className='link-button'>download my CV</button>
                </span>
            </div>

            {/* Insert link to skills */}
            <FontAwesomeIcon icon={faArrowDownLong} className='arrow-down'/>
        </main>
    )
}
