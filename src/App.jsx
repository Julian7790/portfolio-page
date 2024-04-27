import React from 'react';
import Nav from './components/Nav';
import Hero from './section/Hero';
import About from './section/About';
import Projects from './section/Projects';
import ContactMe from './section/ContactMe';


const App = () => (
  <main>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
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

export default App;