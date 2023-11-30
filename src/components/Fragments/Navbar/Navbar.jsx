/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from 'react';
import { Text } from '../../Elements/Text/Texts';

function Navbar() {
  const [scrollBackground, setScrollBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeBackground = scrollPosition > 0;
      setScrollBackground(shouldChangeBackground);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  const navbarStyle = {
    backgroundColor: scrollBackground ? '#283618' : 'transparent',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100,
  };

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linkStyle = {
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    transition: 'background-color 0.3s ease',
  };

  return (
    <nav ref={navbarRef} style={navbarStyle} className="p-4 backdrop-blur-md">
      <div className="flex items-center justify-between p-4">
        {/* Logo dan Nama Brand */}
        <div className="flex items-center">
          <img src="path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <Text className="text-light_green-800 text-lg font-semibold">Save Our Species</Text>
        </div>

        {/* Navigasi untuk layar besar */}
        <div className=" d-flex md:hidden sm:hidden  space-x-4" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}>
          <a href="/lindungi" className="text-white hover:text-green-700">LINDUNGI</a>
          <a href="/lapor" className="text-white hover:text-green-700">LAPOR</a>
          <a href="/artikel" className="text-white hover:text-green-700">ARTIKEL</a>
          <a href="/volunteer" className="text-white hover:text-green-700">Volunteer</a>
        </div>

        {/* Hamburger Button untuk Responsif */}
        <div className=" hidden md:flex sm:flex">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Hamburger saat Responsif */}
      {isOpen && (
        <div style={menuStyle} className="mt-2">
          <a href="/lindungi" style={linkStyle}>LINDUNGI</a>
          <a href="/lapor" style={linkStyle}>LAPOR</a>
          <a href="/artikel" style={linkStyle}>ARTIKEL</a>
          <a href="/volunteer" style={linkStyle}>Volunteer</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
