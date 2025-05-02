import React, { useEffect, useState } from 'react';

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
            Portafolio
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Contactos" className="group relative text-lg ">
            Contactos
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#f6e2b3] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
