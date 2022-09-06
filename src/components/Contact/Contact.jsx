import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wg5obt9', 'template_ystsbns', form.current, 'YgyiteAbuquClmPC7');

        e.target.reset();
      };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ian.yurychuk@protonmail.com</h5>
                        <a hred="mailto:ian.yurychuk@protonmail.com" taget='_blank'>Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact