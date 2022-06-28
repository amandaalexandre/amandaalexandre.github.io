import React from 'react'
import '../assets/styles/header.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// importing images
import Logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    return (
        <nav className='nav-maior'>
            <Link to='/'>
             <img src={Logo} className='logo'></img>
            </Link>
            <span className='nav-menu'>
                <span className='links-menu'>
                    <a href="https://github.com/amandaalexandre">github</a> 
                    
                    <a href="https://www.linkedin.com/in/amanda-vieira-016468211/">
                    linkedin</a>
                    
                    <HashLink smooth to="#skills">skills</HashLink>
                     
                    <HashLink smooth to='#projects' >projects</HashLink> 
                    
                    <HashLink smooth to='#contact' >contact</HashLink>
                </span>
                
                {/* Add menu link in the bars icon */}
              
                    <FontAwesomeIcon icon={faBars} className='menu-icon' />
                
            </span>
           
        </nav>
    )
}
