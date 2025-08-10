import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Content from './content';
import About from './about';
import Gallery from './gallery';
import Footer from './footer';
import Loading from './loading';
import Messages from './Messages'; // ✅ Import Messages component

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
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
      {/* Background watermark */}
      <div
        className="fixed inset-0 z-0 opacity-10 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/logo2.png")`,
          backgroundSize: '80vw',
        }}
      />

      <div className="relative z-10">
        <Nav />
        <Content />
        <About />
        <Messages /> {/* ✅ Added Messages here */}
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
