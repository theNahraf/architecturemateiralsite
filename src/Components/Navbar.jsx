import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newlogo from '../images/newlogo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu
  const location = useLocation(); // Get the current location (URL)

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setIsScrolled(true); // Make navbar black when on Gallery page
      return; // Skip the scroll detection logic for Gallery page
    }

    setIsScrolled(false);

    const scrollableElement = document.querySelector('.app-container'); // Use the container with overflow-auto

    const handleScroll = () => {
      setIsScrolled(scrollableElement.scrollTop > 300); // Detect scroll position
    };

    if (location.pathname !== '/gallery') {
      scrollableElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (location.pathname !== '/gallery') {
        scrollableElement.removeEventListener('scroll', handleScroll); // Cleanup listener
      }
    };
  }, [location.pathname]); // Only rerun the effect if the location changes

  return (
    <nav
      className={`mx-auto w-full h-[8vh] z-50 fixed flex justify-between items-center transition-all duration-300 
      ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center lg:mt-2 mt-2 ml-2 rounded-full">
        <img src={newlogo} className="h-[79px] w-full" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="text-white hidden md:flex items-center">
        <ul className="flex space-x-11 mr-10">
          {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((text, index) => (
            <li key={index} className="relative group">
              <Link
                to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '_')}`}
                className={`relative font-semibold z-10 px-4 py-2 rounded-lg text-white
                ${isScrolled ? 'hover:border-b-2' : 'hover:border-b-2 border-black'}
                 transition-all duration-150`}
              >
                {text}
              </Link>
              <span className="absolute inset-0 flex justify-center items-center"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center mr-2">
          <a
            href="mailto:ashokagriculturalstore@gmail.com"
            className="relative items-center justify-start inline-block px-8 py-3 mr-2 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">
              Email Us
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center mr-4">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full bg-black text-white p-6 md:hidden`}
      >
        <ul className="space-y-4">
          {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((text, index) => (
            <li key={index}>
              <Link
                to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '_')}`}
                className="font-semibold px-4 py-2 block text-white" // Ensure the text is white here
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <a
            href="mailto:ashokagriculturalstore@gmail.com"
            className="relative items-center justify-start inline-block px-8 py-3 mr-2 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">
              Email Us
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
