import React from 'react';
import { motion } from 'framer-motion';

function Content() {
  return (
    <div
      className="h-screen bg-[#FBE6C2] flex flex-col items-center mt-4 text-center font-eagle text-[#AC0D0D] px-4 relative overflow-hidden"
    >
      {/* Faded Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/logo.jpg')" }}
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl md:text-2xl mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to
        </motion.h2>

        {/* Bigger image but moved up with negative margin */}
        <motion.img
          src="/maa.png"
          alt="Durga Maa"
          className="w-64 md:w-80 mx-auto -mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />

        <motion.h1
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#F48B29] to-[#AC0D0D] bg-clip-text text-transparent mt-2"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Matri Samman 2025
        </motion.h1>

        <motion.div
          className="w-20 h-1 bg-[#AC0D0D] rounded-full mx-auto my-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto"
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
