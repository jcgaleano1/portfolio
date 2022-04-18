import React, {useEffect} from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import ScrollToTop from 'react-scroll-to-top';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CV from '../../assets/cv.pdf';

const Contact = () => {
    
    useEffect(() => {
        Aos.init();
      }, [])

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_63dso2c', 'template_9oe1kws', formRef.current, 'PKg2ox3HRmXOovC3N')
            .then((result) => {
                console.log(result.text);
                if(result.text !== ''){
                    Swal.fire({
                        title: 'Thank you so much!',
                        text: 'You have already send a message, I hope to talk with you!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
                else{
                    
                      Swal.fire({
                        title: 'Upsss!',
                        text: 'Please complete all the form!',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                }
            }, (error) => {
                console.log(error.text);
            });
           e.target.reset();
    }

    return (
        <div className='contact'>
            <ScrollToTop smooth top='60' style={{left: '5px', bottom: '15px', backgroundColor: 'transparent', zIndex: '10', border: '1px solid black'}}/>
            <div className="decoration-contact"></div>
            <div className="decoration-contact-2"></div>
            <h2 data-aos='fade' className='title-contact'>Contact</h2>
            <div className="container-contact">
                <div data-aos='fade-down' data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-in-out" className="title-talk-contact">
                    <p>Are you interested in my profile??</p>
                    <h1 className='title-talk'>Let's talk a little</h1>
                    <a className='cv' href={CV} download>Download CV</a>
                </div>
                <div data-aos='fade-up' data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-in-out" className="form-content">
                    <form ref={formRef} className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Put your name' name='user_name' />
                        <input type="text" placeholder='Put the subject' name='user_subject' />
                        <input type="email" placeholder='Put your email' name='user_email' />
                        <textarea rows='5' placeholder='Put your message' name='message' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact