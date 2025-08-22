/* import  { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-[#7e6651]  py-3 px-6 z-50"
    style={{ backgroundColor: "#fdaeae"}}>
      <div className={`container mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'px-40' : 'px-12'}
`}>
        <h1 className="text-2xl font-Lato">(⚬◜ᴗ◝⚬)</h1>
        <nav className="space-x-8">
          <a href="#Home" className="group relative text-lg ">
            Home
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#About" className="group relative text-lg ">
            About
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Portafolio" className="group relative text-lg ">
            Portfolio
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Contactos" className="group relative text-lg ">
            Contact Me
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
*/

import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Manejar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modo oscuro/claro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header
      className={`bg-[#fdaeae] fixed z-50 text-white backdrop-blur-md shadow-md transition-all duration-500 ease-in-out dark:bg-[#fdaeae] dark:text-white ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[53.2%] rounded-full px-6 py-2 bg-black/70 backdrop-blur-md dark:bg-[#ff8daa] dark:text-black dark:backdrop-blur-md'
          : 'top-0 left-0 w-full rounded-none px-24 py-4 '
      }`}
    >
      <div
        className={`flex justify-between items-center w-full transition-all duration-500 ease-in-out ${
          isScrolled ? 'px-6 py-4' : 'px-24 py-4'
        }`}
      >
        <h1
          className={`font-poppins font-bold transition-all duration-500 ease-in-out ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}
        >
          (；▿； )
        </h1>

        <nav className="flex items-center space-x-4 md:space-x-8 transition-all duration-500 ease-in-out text-base font-poppins">
          {['Home', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#7e6651] transition-all duration-300 group-hover:w-full rounded"></span>
            </a>
          ))}

          <span className="mx-2 text-white dark:text-white">|</span>

          
        </nav>
      </div>
    </header>
  );
};

export default Header;
