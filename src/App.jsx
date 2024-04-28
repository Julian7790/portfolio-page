import React, { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './section/Hero';
import About from './section/About';
import Projects from './section/Projects';
import ContactMe from './section/ContactMe';

// Background GIFs mapping for different songs
const musicBackgrounds = {
  'Tyla': '/music/backgrounds/water.gif',
  'Bob Marley': '/music/backgrounds/orange.gif',
  'D4vd': '/music/backgrounds/invincible.gif',
  'Frank Ocean': '/music/backgrounds/FrankOcean.gif'
};

const musicData = [
  { name: 'Tyla', source: '/music/Tyla.mp3' },
  { name: 'Bob Marley', source: '/music/BobMarley.mp3' },
  { name: 'D4vd', source: '/music/Invincible.mp3' },
  { name: 'Frank Ocean', source: '/music/FrankOcean.mp3' },
];

const App = () => {
  // Lifting state from Hero to App for tracking play status and current song
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Current song name and associated background
  const currentSongName = musicData[currentSongIndex].name;
  const currentBackground = isPlaying ? musicBackgrounds[currentSongName] : null;

  return (
    <main
      style={{
        backgroundImage: currentBackground ? `url(${currentBackground})` : 'none', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 0.5s ease', 
      }}
    >
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          currentSongIndex={currentSongIndex} 
          setCurrentSongIndex={setCurrentSongIndex} 
          musicData={musicData} 
        />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <footer>
        <ContactMe />
      </footer>
    </main>
  );
};

export default App;