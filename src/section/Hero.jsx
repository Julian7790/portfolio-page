import React, {useState, useEffect, useRef} from 'react'
import { profileImage2 } from '../images'
import { playButton, nextButton, pauseIcon } from '../icon'


const musicData = [
  {name: 'Frank Ocean', source: '/music/FrankOcean.mp3' },
  {name: "Bob Marley", source: '/music/BobMarley.mp3'}
]


const Hero = () => {

 const [isPlaying, setIsPlaying] = useState(false);
 const [currentSongIndex, setCurrentSongIndex] = useState(0);
 const audioRef = useRef(new Audio(musicData[currentSongIndex].source));
  
  const playMusic = () => {
    setIsPlaying(true);
    audioRef.current.play();
  }
 
  const pauseMusic = () => {
   setIsPlaying(false);
   audioRef.current.pause();
  }

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % musicData.length); 
  };
  

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(musicData[currentSongIndex].source); 
    if (isPlaying) {
      audioRef.current.play(); 
    }
  }, [currentSongIndex, isPlaying]);

 



  return (
    <section 
    id='home'
    className='padding-x py-10 flex justify-between flex-wrap'
    >
      <div className='w-48 bg-mid-white' >
         <img src={profileImage2} 
         alt="profileimg" 
         className='m-12' 
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      </div>
      <div className='flex flex-col bg-light-white '>
        <h3 className='font-montserrat m-5 text-xl'>Hi my name is Julian Forte</h3>
        <h1 className='font-montserrat m-5 text-4xl font-bold'>I'm a Front End Developer.</h1>
        <div className='flex flex-row gap-6'>
        <button 
        onClick={isPlaying ? pauseMusic : playMusic}
       
        >
          <img 
          src={isPlaying ? pauseIcon : playButton} 
          alt="play/pause button" 
          width={100}
          height={100}
          />
          </button>
          <button onClick={nextSong}>
          <img 
          src={nextButton} 
          alt="next button" 
          width={100}
          height={100}
          />
          </button>
          <h3 className='font-montserrat m-5 text-xl'>Grab some popcorn and play some music</h3>
          
        </div>
      </div>
    </section>
  )
}

export default Hero