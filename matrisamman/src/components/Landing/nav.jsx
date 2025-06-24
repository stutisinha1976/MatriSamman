import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-[#FBE6C2] px-6  shadow-md w-full font-eagle">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
          <img src="/logo2.png" alt="Matrisamman Logo" className="w-20" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-[#FBE6C2] text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/awards">Awards</Link></li>
          <li><Link to="/rotary">Rotary</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-4 text-lg font-medium text-[#FBE6C2]">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/awards" onClick={() => setIsOpen(false)}>Awards</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
