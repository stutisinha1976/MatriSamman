'use client';
import React from 'react';

const Content = () => {
  return (
    <section
      id="convenor"
      className=" border-t border-white/20 text-[#FBE6C2] font-eagle shadow-inner"
    >
      <div className="px-4 md:px-8 py-10">

        {/* Eyes Image */}
        <img
          src="/eyes.png"
          alt="Eyes"
          className="w-20 mx-auto mb-4"
        />

        {/* Heading */}
        <div className="text-center text-3xl md:text-5xl font-thin text-red-900">
          Introducing <i><span className="text-[#FFD700]">Rotary</span></i>
        </div>

        {/* Underline Image */}
        <img
          src="/imageb.png"
          alt="Underline"
          className="w-40 md:w-56 mx-auto mt-2 mb-6"
        />

        {/* Text Content */}
        <div className="mt-6 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-10">
          <div className="text-base md:text-lg flex flex-col text-red-900 items-center lg:items-start text-justify space-y-4 bg-white/10 backdrop-blur-sm border border-white/20 shadow-md rounded-xl p-6 w-full lg:w-[60%] ">
            <p>
              With 1.6 million leaders, professionals, and community members worldwide, Rotary is a global organization dedicated to serving others, upholding honesty, and fostering goodwill and peace. For more than a century, Rotary has been guided by the slogan — Service Above Self — directing enthusiasm, vigor, and creativity into long-term initiatives that tackle pressing worldwide issues including poverty, illiteracy, illness, and more.
            </p>
            <p>
              With the mission statement, <i>Heal the World and Make it a Better Place</i>, Rotary members strive to empower people, strengthen communities, and make enduring, constructive contributions. Their steadfast dedication to global service and humanitarian endeavors guarantees ongoing advancements toward a more just and peaceful world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
