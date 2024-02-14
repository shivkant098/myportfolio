// Contact.js

import React from 'react';
import Footer from './Footer';
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
    <div className='contact'>
      <div className='contact-img'>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQxb2VoanpiMnMxYjk5b2FibjY2Y2NtZjBnc242cWQwdzFrYXdjbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K77lWFobBeX5xcLsdp/giphy.gif" alt="img" />
      </div>
      <div className='contact-text'>
      <div class="button-container">
  <a href="https://drive.google.com/file/d/1oB7yEr4T0w7HyEG4ydJuaFEQBJfWpQ0R/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="button">
    SDE Resume
  </a>
  <a href="https://drive.google.com/file/d/1hl4LgywYF_kat2MSiSvrdAp7gMrrNRIm/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="button1">
     Data Analysts Resume
  </a>
</div>

        <p className="social-container">
          <a
            href="https://github.com/golu098"
            className="social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivkantkumar/"
            className="social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://leetcode.com/golu_sharma_24/"
            className="social"
          >
            <img className="logo-leetcode" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDFbGpqgz6rgTdZc6IZ1lukb-al5c04QyczeAVeiEqaBBTqr7rAUwj64LwX0rqOj7R5A&usqp=CAU' alt='img' style={{size:'2x'}}/>
          </a>
          <a
            href="https://wa.me/6202055728"  // Replace with your WhatsApp number
            className="social"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://t.me/real_warrrior_golu" // Replace with your WhatsApp number
            className="social"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          {/* <a href='' className='logo-gfg'>
            <img src='https://i.ibb.co/1fvDvKL/gfg-removebg-preview.png'alt="img"/>
          </a> */}
        </p>
      </div>
      </div>
      <div className='form'>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Contact Us</h1>
      <div className="contact-form">
<form action=" https://formspree.io/f/mpzgnbqr" method="POST" className="contact-inputs">
<input type="text" placeholder="username" name="username"required autoComplete="off"/>
<input type="email" placeholder="Email" name="Email"required autoComplete="off"/>
<textarea name="Messages" cols="10" rows="20" required autoComplete="off" placeholder="Enter Your Message"/>
<input type="submit" value="send"/>
  </form>
  {/* end */}
  </div>
<Footer/>
      </div>
    </div>

  );
}

export default Contact;
