import React from 'react';
import Nav from '../Landing/nav';
import Carousel1 from './carousel1';
import Carousel2 from './carousel2';
import Content from './content';
import Footer from '../Landing/footer';

function Rotary() {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-eagle text-[#5a0404]"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      {/* Faint background logo overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10 bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url("/logo2.png")`,
          backgroundSize: '80vw',
          backgroundPosition: 'center',
        }}
      />

      {/* Main content layered above background */}
      <div className="relative z-10">
        <Nav />
        <Content />
        <Carousel1 />
        <Carousel2 />
        <Footer />
      </div>
    </div>
  );
}

export default Rotary;
