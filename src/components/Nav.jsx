import { useState } from 'react';
import { hamburger, xIcon } from '../icon';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-me", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-us", label: "Contact Me" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); 
  };

  return (
    <header className='padding-x py-10 w-full flex justify-between items-center flex-wrap bg-light-white '>
      <div>
        <h1 className='font-palanquin font-bold text-4xl ml-12'>Julian Forte</h1>
      </div>
      <nav className='relative'>
      
        <ul className='flex gap-12 font-palanquin font-bold text-xl mr-14 mt-4 max-lg:hidden'>
          {navLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>

        
        <div className='hidden max-lg:block mr-12 '>
          <button onClick={toggleMenu}>
            <img 
              src={menuOpen ? xIcon : hamburger} 
              alt="Hamburger" 
              width={25} 
              height={25} 
            />
          </button>
        </div>

        {/* Collapsible menu for smaller screens */}
        {menuOpen && (
          <ul 
            className='flex flex-col gap-6 bg-light-white p-6 rounded shadow-lg z-10' // Position under the main header
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  onClick={toggleMenu}
                  className='font-palanquin font-bold text-xl'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};


export default Nav
