import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Awards", to: "/awards" },
    { label: "Rotary", to: "/rotary" },
    { label: "Team", to: "/team" },
    { label: "Sponsors", to: "/sponsors" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-[#FBE6C2] px-6 shadow-md w-full font-eagle">
      <div className="relative flex justify-between items-center">

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
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Dropdown Absolute) */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-[#5a0404]/80 backdrop-blur-md rounded-md shadow-lg border border-white/20 z-50">
            <ul className="flex flex-col gap-4 p-4 text-lg font-medium text-[#FBE6C2]">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} onClick={() => setIsOpen(false)}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
