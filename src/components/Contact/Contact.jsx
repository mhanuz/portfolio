import {React, useRef} from 'react'
import './Contact.css'
import emailJs from "@emailjs/browser"


const Contact = () => {

  const refForm =useRef()
  const sendEmail=(e)=>{
    e.preventDefault()
    emailJs.sendForm(
        'service_1x4dqv5',
        'template_7civd13',
         refForm.current,
        'aBWDH_uRZ57uMB2R6'
    )
    .then(
        ()=>{
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        ()=>{
            alert('Failed to send the message, plsease try again')
        }
    )
    e.target.reset();
}
  return (
    
      <div className="contact-page-container">
                <div className="contact-page-text-zone">
                    <h1>
                    Contact Me
                    </h1>
                    <p>
                    Mail: ceanuz66@gmail.com Phone:01957060587
                    </p>
                    <div className='.contact-page-contact-form'>
                    
                        <form ref={refForm} onSubmit={(e)=>sendEmail(e)} >
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>

                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>

                                <li>
                                    <input type="text" name='name' placeholder='Subject' required />
                                </li>

                                <li>
                                    <textarea placeholder='Messsage' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
  )
}

export default Contact