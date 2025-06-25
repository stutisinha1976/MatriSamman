'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel2 = () => {
  const cards = [
    { image: "/rtr9.jpg" },
    { image: "/rtr10.jpg" },
    { image: "/rtr11.jpg" },
    { image: "/rtr12.jpg" },
    { image: "/rtr13.jpg" },
    { image: "/rtr14.jpg" },
    { image: "/rtr15.jpg" },
  ];

  return (
    <section id="committee" className="text-[#FBE6C2] font-eagle py-10">
      <div className="w-full px-2 md:px-4 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-[95%] md:w-[80%] mx-auto"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] rounded-lg shadow-xl overflow-hidden">
                <img
                  src={card.image}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
  /* Navigation Arrows */
  .swiper-button-next,
  .swiper-button-prev {
    color: #FBE6C2; /* soft golden */
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1); /* subtle glass effect */
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
  }

  /* Pagination Bullets */
  .swiper-pagination-bullets {
    bottom: -30px;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: background 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #FBE6C2; /* golden tone to match your theme */
  }
`}</style>

    </section>
  );
};

export default Carousel2;
