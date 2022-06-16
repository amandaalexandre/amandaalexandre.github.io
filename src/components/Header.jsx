import React from 'react'
import '../assets/styles/header.css'
import { Link } from 'react-router-dom'

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
                    github linkedin skills projects contact
                </span>
                
                {/* Add menu link in the bars icon */}
                <FontAwesomeIcon icon={faBars} className='menu-icon' />
            </span>
           
        </nav>
    )
}
