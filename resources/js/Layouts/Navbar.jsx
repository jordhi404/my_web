import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isFixed ? 'navbar-fixed' : 'absolute'} bg-transparent top-0 left-0 w-full shadow z-10 p-4`}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl text-rose-500 px-4 py-6">
          Jordhi Tejo Saputro
        </div>

        {/* Wrapper untuk tombol + menu */}
        <div className="relative md:flex md:items-center md:gap-4 px-4">

          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              id="hamburger-menu"
              name="hamburger-menu"
              onClick={toggleMenu}
              type="button"
              className="block"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>

          {/* Menu */}
          <ul
            id="nav-menu"
            className={`${
              isActive ? 'block' : 'hidden'
            } absolute md:static md:flex items-center gap-4 py-5 md:py-0 bg-white md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none max-w-[250px] md:max-w-none w-[200px] md:w-auto right-0 top-full z-20`}
          >
            <li><Link href="/" className="hover:text-rose-500 px-4 py-1 block">Home</Link></li>
            <li><Link href="/about" className="hover:text-rose-500 px-4 py-1 block">About</Link></li>
            <li><Link href="/projects" className="hover:text-rose-500 px-4 py-1 block">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-rose-500 px-4 py-1 block">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}