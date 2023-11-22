/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false); // scroll berubah warna

  // Blum bisa dicek krn egk bisa discroll
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

  // Blum bisa dicek krn egk bisa discroll
  const navbarStyle = {
    backgroundColor: scrollBackground ? '#283618' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  return (
    <nav style={navbarStyle} className="p-4 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo dan Nama Brand */}
        <div className="flex items-center">
          <img
            src="path/to/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-green-800 text-lg font-semibold">Save Our Species</span>
        </div>

        {/* Navigasi */}
        <div
          className="hidden md:flex space-x-4"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}
        >
          <a
            href="/lindungi"
            className="text-white hover:text-green-700"
          >
            LINDUNGI
          </a>
          <a
            href="/lapor"
            className="text-white hover:text-green-700"
          >
            LAPOR
          </a>
          <a
            href="/artikel"
            className="text-white hover:text-green-700"
          >
            ARTIKEL
          </a>
          <a
            href="/volunteer"
            className="text-white hover:text-green-700"
          >
            Volunteer
          </a>
        </div>

        {/* Hamburger Button untuk Responsif */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Hamburger saat Responsif Masih jelek */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="/lindungi" className="block text-white">Lindungi</a>
          <a href="/lapor" className="block text-white">Lapor</a>
          <a href="/artikel" className="block text-white">Artikel</a>
          <a href="/volunteer" className="block text-white">Volunteer</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
