import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Contact.css"
import  emailjs from "emailjs-com"

const Contact=()=> {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7efvkc', 'template_dz3q4nn', form.current, 'Pmj4DvkNvTAtT6OUd')
    .then((result) => {
       console.log (alert("Message sent successfully!"));
    }, (error) => {
      console.log("error")  
  });
     
    e.target.reset();

  };


  return (

    <div className='Contact'>

      <div className='circleContact'>
        <Link to="/">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M101.836 57.1641L57.5625 18.7383C57.2227 18.4453 56.7891 18.2812 56.332 18.2812H45.9609C45.0938 18.2812 44.6953 19.3594 45.3516 19.9219L86.3906 55.5469H17.8125C17.2969 55.5469 16.875 55.9687 16.875 56.4844V63.5156C16.875 64.0313 17.2969 64.4531 17.8125 64.4531H86.3789L45.3398 100.078C44.6836 100.652 45.082 101.719 45.9492 101.719H56.6719C56.8945 101.719 57.1172 101.637 57.2812 101.484L101.836 62.8359C102.242 62.4832 102.567 62.0474 102.79 61.5582C103.013 61.069 103.128 60.5376 103.128 60C103.128 59.4624 103.013 58.931 102.79 58.4418C102.567 57.9526 102.242 57.5168 101.836 57.1641V57.1641Z" fill="#271AC1"/>
      </svg>
        </Link>

      </div>

      <div className='contactFlex'>

        <div className='contactFlex1'>

        </div>

        <div className='contactFlex2'>

          <h1>Hey, we are still in the works, <br/> but you can send us a message!</h1>

          <div className='circleContact2'>

          </div>

          <form className='contactForm' ref={form} onSubmit={sendEmail}>

          <label className='label'>
           First name
          <input type="text" id="cName1" name="user_name" placeholder="First Name." required/>
          </label>

          <label className='label'>
            Last name
          <input type="text" id="cName1" name="user_name"  placeholder="Last Name." required/>
          </label>

          <label className='label'>
            Email address
          <input type="email" id="cName1" name="user_email"  placeholder="Email Address." required/>
          </label>
         
         <label className='label'>
         What do you need help with?
         <textarea type="text" id='textBox' name="message" placeholder="Write something..." required/>
         </label>

        <div className='link'>
         <button type='submit' name='message'>
          Send Now
         </button>
            </div>
     
        </form>


        </div>

      </div>

    </div>
  )
}

export default Contact