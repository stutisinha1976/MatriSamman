import React from 'react';
import Nav from './nav';
import Content from './content';
import About from './about';
import Gallery from './gallery';
import Footer from './footer';

function Landing() {
  return (
    <div
      className="relative min-h-screen overflow-visible"
      style={{
        backgroundImage: `url("/bg2.png")`,
        backgroundRepeat: 'repeat-y',      // vertical repeat for long pages
        backgroundSize: 'cover',           // make sure it scales to fill
        backgroundPosition: 'center top',  // keep focus on top-center
      }}
    >
      {/* Faded logo in background */}
      <div
        className="fixed inset-0 z-0 opacity-10 bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/logo2.png")` }}
      />

      {/* Foreground */}
      <div className="relative z-10">
        <Nav />
        <Content />
        <About />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
