import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

// importing styles
import '../assets/styles/main.css'
import '../assets/styles/titles.css'
import '../assets/styles/button.css'

export default function Main() {
    return (
        <main>
            <div className='main-container'>
                <h1>AMANDA <span className='text-shadow-white'>ALEXANDRE</span></h1>
                <h2>FRONT END DEVELOPER</h2>
                <p className='text-block'>Junior Front End Developer in love with interactive interfaces. Projects include creating and consuming APIs, Javascript, React, database queries and Node.js.  
                </p>

                {/* Include links to CV and Skills component */}
                <span>
                    <HashLink smooth to='#skills'>
                        <button className='link-button'>see what I can do</button>
                    </HashLink>

                    <Link to='amanda-vieira-full-stack.pdf'>
                        <button className='link-button'>download my CV</button>
                    </Link>
                </span>
            </div>

            {/* Insert link to skills */}
            <HashLink smooth to='#skills' className='arrow-down' >
                <FontAwesomeIcon icon={faArrowDownLong} />
            </HashLink>
        </main>
    )
}
