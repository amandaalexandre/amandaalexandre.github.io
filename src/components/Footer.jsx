import React from 'react'
import '../assets/styles/footer.css'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <footer>
            <section className='follow-me'>
                <h2 className='follow'>follow</h2>
                <h2 className='me'>me</h2>
                <div>
                    {/* <a href="">
                        <FontAwesomeIcon icon={faGithub} />
                    </a> */}
                    <a href="">LinkedIn</a>
                </div>
            </section>
            <section className='disclaimer'>
                This is an original template created by me. If you decide to use it for your own portfolio, please provide credits to my Github page.
            </section>
            <section className='bar'>asdas</section>

        </footer>
    )
}
