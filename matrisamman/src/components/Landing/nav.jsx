import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#AC0D0D] text-[#FBE6C2] px-6 py-4 shadow-md w-full font-eagle">
      <div className="flex justify-between items-center">
        
        {/* Logo on the left */}
        <Link to="/">
          <img src="/logo.jpg" alt="Matrisamman Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/awards">Awards</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
