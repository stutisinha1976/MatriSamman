import React, { useEffect, useState } from 'react';

function Gallery() {
  const images = Array.from({ length: 9 }, (_, i) => `/gall${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Determine how many images to show based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);       // Mobile
      else if (width < 1024) setVisibleCount(2); // Tablet
      else setVisibleCount(4);                   // Desktop
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    return Array.from({ length: visibleCount }, (_, i) => images[(currentIndex + i) % images.length]);
  };

  return (
    <div className="min-h-screen text-red-900 font-eagle flex flex-col items-center justify-center px-6">
      
      {/* Heading with Foot Images */}
      <div className="flex items-center justify-center gap-4 ">
        <img src="/foot.png" alt="Foot Left" className="w-12 md:w-20 rotate-[25deg]" />
        <h2 className="text-3xl md:text-4xl font-bold text-center">Matri Samman Gallery</h2>
        <img src="/foot.png" alt="Foot Right" className="w-12 md:w-20 -scale-x-100 -rotate-[25deg]" />
      </div>

      {/* Underline */}
      <div className="w-62 md:w-100 mb-4">
        <img src="/imageb.png" alt="Underline" className="w-100 flex justify-center" />
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full"
        >
          ❮
        </button>

        <div className="flex overflow-hidden gap-6 px-10">
          {getVisibleImages().map((src, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 aspect-square rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Gallery;
