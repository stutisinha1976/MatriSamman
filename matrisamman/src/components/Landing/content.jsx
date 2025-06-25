import React from 'react';
import { motion } from 'framer-motion';

function Content() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center font-eagle text-white px-4 relative overflow-hidden">
      
      {/* Decorative Lights - Full width under navbar */}
      
      {/* Left Dhaki - Hidden on small screens */}
      <motion.img
        src="/dhaki_right.png"
        alt="Dhaki Left"
        className="absolute bottom-0 left-0 w-28 md:w-36 transform -scale-x-100 z-0 mb-16 hidden md:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Right Dhaki - Hidden on small screens */}
      <motion.img
        src="/dhaki_right.png"
        alt="Dhaki Right"
        className="absolute bottom-0 right-0 w-28 md:w-36 z-0 mb-16 hidden md:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Top-Left Chand */}
      <div className="absolute top-0 left-10 flex items-start gap-1 z-0">
        <motion.img
  src="/big_chand.png"
  alt="Big Chand Right"
  className="w-30 md:w-80 translate-x-[-70px] md:translate-x-0"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
/>

        <motion.img
          src="/small_chand.png"
          alt="Small Chand Right of Left"
          className="w-20 md:w-40 hidden md:block"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      {/* Top-Right Chand */}
      <div className="absolute top-0 right-10 flex items-start gap-1 z-0 flex-row-reverse">
        <motion.img
          src="/big_chand.png"
          alt="Big Chand Right"
          className="w-30 md:w-80 translate-x-[70px] md:translate-x-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.img
          src="/small_chand.png"
          alt="Small Chand Left of Right"
          className="w-20 md:w-40 hidden md:block"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-xl md:text-2xl mb-[2px] text-white absolute -top-28 left-1/2  -translate-x-1/2 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Rotary Club of Bengal Presidency <br/>
          <p className='text-red-900 italic'>presents</p>
        </motion.h2>

        <div className="relative mb-[2px] -ml-2 flex justify-center items-center">
          {/* Background image behind Maa - hidden on small screens */}
          <motion.img
            src="/maa_back.png"
            alt="Maa Back"
            className="absolute top-1/2 left-[47%] w-[28rem] md:w-[50rem] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Foreground Maa image */}
          <motion.img
            src="/maa.png"
            alt="Durga Maa"
            className="w-60 md:w-80 relative z-10 ml-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: -10, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
        </div>

        <motion.h1
          className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-white mt-[1px]"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          মাতৃ সম্মান ২০২৫
        </motion.h1>

        <motion.div
          className="w-16 h-1 bg-white rounded-full mx-auto my-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        <motion.p
          className="text-sm md:text-base max-w-xl mx-auto text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Honoring the finest Durga Puja artistry across Bengal.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Content;
