import React from 'react'
import { nikeWeb } from '../images'

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
          className='border border-gray-800 p-5 rounded-lg hover:border-gray-900 hover:bg-gray-300'
        >
         <img 
         src={nikeWeb} 
         alt="nike website" 
         width={500}
         height={500}
         />
        <h4 className='font-montserrat text-center font-bold p-10'>Project One</h4>
        </a>
       
     </div>
    </section>
  )
}

export default Projects