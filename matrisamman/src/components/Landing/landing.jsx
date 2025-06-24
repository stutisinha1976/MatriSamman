import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Content from './content';
import About from './about';
import Gallery from './gallery';
import Footer from './footer';
import Loading from './loading'; // ✅ Correct import

function Landing() {
  const [isLoading, setIsLoading] = useState(true); // ⏳ Initial loading

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; // ✅ Show this first
  }

  return (
    <div
      className="relative min-h-screen overflow-visible"
      style={{
        backgroundImage: `url("/bg2.png")`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div
  className="fixed inset-0 z-0 opacity-10 bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("/logo2.png")`,
    backgroundSize: '80vw', // Default size
  }}
/>

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
