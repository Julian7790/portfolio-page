import React from 'react'
import { email, linkedIn } from '../icon'

const ContactMe = () => {
  return (
    <section 
      id='contact-us'
      className='padding-x py-10'
    >
      <h4 className='font-montserrat text-center font-semibold p-10'>Get in Touch</h4>
      <h1 className='font-palanquin text-8xl text-center font-bold mb-10'>Contact Me</h1>
      <div className='flex flex-col sm:flex-row justify-center items-center flex-wrap gap-5'>
        {/* Email Section */}
        <div className='flex flex-col sm:flex-row items-center mb-6 sm:mb-0'>
          <img 
            src={email} 
            alt="Email" 
            width={40} 
            height={40} 
            className='mr-4' 
          />
          <h4 className='font-montserrat font-semibold'>julianforte85@yahoo.com</h4>
        </div>
        
        {/* LinkedIn Section */}
        <div className='flex flex-col sm:flex-row items-center'>
          <a 
            href="https://www.linkedin.com/in/julian-forte-502801243/"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center'
          >
            <img 
              src={linkedIn} 
              alt="LinkedIn" 
              width={40} 
              height={40} 
              className='mr-4' // Margin-right to create space between image and text
            />
            <h4 className='font-montserrat font-semibold'>Linked In</h4>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactMe