import React, { useEffect, useState } from 'react';

function Gallery() {
  const images = Array.from({ length: 9 }, (_, i) => `/gall${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loadedImages, setLoadedImages] = useState(Array(images.length).fill(false));

  // Update visible image count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(4);
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
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % images.length;
      return { src: images[index], index };
    });
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="min-h-screen text-red-900 font-eagle flex flex-col items-center justify-center px-6">
      
      {/* Heading */}
      <div className="flex items-center justify-center gap-4">
        <img src="/foot.png" alt="Foot Left" className="w-12 md:w-20 rotate-[25deg]" />
        <h2 className="text-3xl md:text-4xl font-bold text-center">Matri Samman Gallery</h2>
        <img src="/foot.png" alt="Foot Right" className="w-12 md:w-20 -scale-x-100 -rotate-[25deg]" />
      </div>

      {/* Underline Image */}
      <div className="w-62 md:w-100 mb-4">
        <img src="/imageb.png" alt="Underline" className="mx-auto" />
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
          {getVisibleImages().map(({ src, index }) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 aspect-square rounded-lg overflow-hidden shadow-lg flex-shrink-0 relative"
            >
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg border border-white/20 z-0" />
              )}
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
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
