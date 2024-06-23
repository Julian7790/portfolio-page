import React from 'react'
import { Splam, nikeWeb } from '../images'

const Projects = () => {
  return (
    <section 
    id='projects'
    className='padding-x py-10'
    >
        <h4 className='font-montserrat text-center font-semibold p-10'>Browse My Recent Projects</h4>
     <h1 className='font-palanquin text-8xl text-center font-bold mb-10'>Projects</h1>
     <div className='flex flex-row justify-center flex-wrap gap-7 '>
        <a 
        href="https://niketailwindstore.netlify.app/"
        target="_blank"
          rel="noopener noreferrer"
          className='border border-gray-800 p-5 rounded-lg hover:border-gray-900 hover:bg-gray-300 mb-5'
        >
         <img 
         src={nikeWeb} 
         alt="nike website" 
         width={500}
         height={500}
         />
        <h4 className='font-montserrat text-center font-bold p-10'>Project One</h4>
        <p className='font-palanquin'>I showcase my skills to demonstrate Responsive Design by creating a Nike Store App</p>
        </a>
       
     </div>
     <div className='flex flex-row justify-center flex-wrap gap-7 '>
        <a 
        href="https://splam.netlify.app/#"
        target="_blank"
          rel="noopener noreferrer"
          className='border border-gray-800 p-5 rounded-lg hover:border-gray-900 hover:bg-gray-300'
        >
         <img 
         src={Splam} 
         alt="Splam website" 
         width={500}
         height={500}
         />
        <h4 className='font-montserrat text-center font-bold p-10'>Project Two</h4>
        <p className='font-palanquin'>With my understanding of APIs, I used the Spotify API to create my own Music App.</p>
        </a>
       
     </div>
    </section>
  )
}

export default Projects