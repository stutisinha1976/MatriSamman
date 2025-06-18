import React from 'react';
import Nav from './nav';
import Content from './content';

function Landing() {
  return (
    <div className="relative min-h-screen bg-[#FBE6C2] overflow-hidden">
      
      {/* Sticky, faded logo background */}
      <div
  className="fixed inset-0 z-0 opacity-10 bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: `url("/logo.jpg")` }}
/>

      {/* Foreground content */}
      <div className="relative z-10">
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default Landing;
