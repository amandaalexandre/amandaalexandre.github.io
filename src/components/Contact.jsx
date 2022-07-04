import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../assets/styles/contact.css'

export default function Contact() {

    // EmailJS
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8hnpx5', 'portfolio', form.current, 'R2WL_K0GmVashq23k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone</label>
                <input type="phone" name="user_phone" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>

        </section>
    )
}
