import React from 'react';
import Nav from '../Landing/nav';

function Rotary() {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-eagle text-[#5a0404]"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <Nav />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
        <h1 className="text-4xl md:text-6xl">Coming Soon</h1>
      </div>
    </div>
  );
}

export default Rotary;
