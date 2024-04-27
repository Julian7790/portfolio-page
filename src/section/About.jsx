import React from 'react'
import { aboutMe } from '../images'
import { javascriptICON, reactICON, reduxICON, tailwindICON } from '../icon'


const About = () => {
  return (
    <section id='about-me'
    className='padding-x py-10'
    >
        <h1 className='font-palanquin text-4xl text-center font-bold p-10'>About Me</h1>
        <div className='flex  flex-wrap justify-between lg:flex-row flex-col lg:items-start items-center'>
           <div className='flex justify-center lg:w-1/2'>
           <img 
           src={aboutMe} 
           alt="about me" 
           width={400}
           height={400}
           className='m-5 ml-10 rounded-full max-lg:flex justify-center items-center'
           /> 
          </div>
           <div className='flex flex-row lg:mt-0 mt-4 justify-center lg:justify-between flex-wrap'>
           <div className='border border-gray-800 p-10 mr-20'>
             <h2 className='font-montserrat font-semibold text-3xl'>Experience</h2>
             <h3 className='font-montserrat'>1+ Years</h3>
             <h4>Front-End Development</h4>
           </div>
           <div className='border border-gray-800 p-10'>
             <h2 className='font-montserrat font-semibold text-3xl'>Technology</h2>
             <img src={reactICON} 
             alt="reactIcon"
             width={50}
             height={50}
             />
             <img src={tailwindICON} 
             alt="tailwindICON"
             width={50}
             height={50}
             />
             <img src={javascriptICON} 
             alt="javascriptICON"
             width={50}
             height={50}
             />
               <img src={reduxICON} 
             alt="reduxICON"
             width={50}
             height={50}
             />
           </div>
           </div>
        </div>
    </section>
  )
}

export default About