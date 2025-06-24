import React from 'react';
import Nav from '../Landing/nav';

function Team() {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-eagle text-[#5a0404]"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <Nav />
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] text-6xl">
        Coming Soon
      </div>
    </div>
  );
}

export default Team;
