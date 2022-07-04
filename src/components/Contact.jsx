import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../assets/styles/contact.css';
import '../assets/styles/button.css'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

    // EmailJS
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8hnpx5', 'portfolio', form.current, 'R2WL_K0GmVashq23k')
      .then((result) => {
        // Shows confirmation message
          alert(result.text);
      }, (error) => {
        // Shows error message:
          alert(error.text);
      });

    //   Reset fields of form after it's sent
    e.target.reset();
  };
    
    return (
        <section className='contact-container' id="contact">
            <div className='black-sidebar'>
            <h1><span className='title-white'>SAY</span> <span className='text-shadow-black'>HI.</span></h1>
            </div>

            {/* Contact form */}
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Name'/>
                <label>Email</label>
                <input type="email" name="user_email" placeholder='E-mail' />
                <label>Phone</label>
                <input type="phone" name="user_phone" placeholder='(xx) xx xxxx-xxxx'/>
                <label>Message</label>
                <textarea name="message" placeholder='Say hi!'/>
                <button type="submit" value="Send" className='link-button'>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                    &nbsp; Send
                </button>
            </form>

        </section>
    )
}
