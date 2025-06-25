'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel1 = () => {
  const cards = [
    { image: "/rtr1.jpg" },
    { image: "/rtr2.jpg" },
    { image: "/rtr3.jpg" },
    { image: "/rtr4.jpg" },
    { image: "/rtr5.jpg" },
    { image: "/rtr6.jpg" },
    { image: "/rtr7.jpg" },
    { image: "/rtr8.jpg" },
  ];

  return (
    <section id="committee" className="text-[#FFD700] font-eagle  py-10">
      
      {/* Eyes and Heading */}
      <img src="/eyes.png" alt="Eyes" className="w-20 mx-auto mb-2" />
      <h1 className="flex justify-center text-3xl md:text-5xl font-thin text-center px-4">
        Our <span className="text-red-900">&nbsp;<i>Event Gallery</i></span>
      </h1>
      <img src="/imageb.png" alt="Underline" className="w-40 md:w-56 mx-auto mt-2 mb-6" />

      {/* Swiper Carousel */}
      <div className="w-full px-2 md:px-4 py-8 relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
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
              <div className=" h-[300px] rounded-lg shadow-xl overflow-hidden">
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

      {/* Swiper Styles */}
      <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          color: #003161;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        }
        .swiper-pagination-bullets {
          bottom: -30px;
        }
      `}</style>
    </section>
  );
};

export default Carousel1;
