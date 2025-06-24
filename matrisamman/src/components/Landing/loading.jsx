import React from 'react';

function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#5a0404]">
      <img
        src="/logo2.png"
        alt="Matri Samman Logo"
        className="w-32 md:w-100 animate-pulse"
      />
    </div>
  );
}

export default Loading;
