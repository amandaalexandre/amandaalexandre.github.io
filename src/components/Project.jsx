import React from 'react'
import '../assets/styles/portfolio.css'
import '../assets/styles/button.css'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project(props) {
    

    return (
        <div className='portfolio-card'>
            <a href={props.live}>
                <img src={`thumbs/${props.thumbnail}`} className='card-img' />
            </a>
            <span className='portfolio-project-name'>{props.name}</span>
            <span className='portfolio-button-line'>

                <a href={props.live}>
                    <button className='portfolio-button'>
           
                        <FontAwesomeIcon icon={faDisplay} />
                        Live
                    {/* </div> */}
                </button></a>

                <a href={props.repo}>
                    <button className='portfolio-button'>
                    {/* <div className='portfolio-button code'> */}
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                    {/* </div> */}
                </button></a>
            </span>

            <span><b>Stack:</b> {props.stack}</span>
        </div>
    )
}
