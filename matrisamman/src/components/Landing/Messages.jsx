import React from 'react';

function Messages() {
  const messages = [
    {
      name: 'Rtn. Sirsanya Bandopadhyay',
      title: 'President, Rotary Club of Bengal Presidency',
      image: 'sirsanya.jpg',
      text: `Welcome to Matri Samman 2025!
As President of the Rotary Club of Bengal Presidency, it's my distinct pleasure to welcome you to Matri Samman 2025, the flagship event of our club, Rotary Club of Bengal Presidency.

Matri Samman is dedicated to celebrating the extraordinary artistry and devotion behind Durga Puja. We proudly recognize and award the top pandals across various categories, honoring their creativity, cultural impact, and community spirit.

Thank you for joining us in celebrating this cherished tradition. Your support fuels our commitment to service.`
    },
    {
      name: 'Rtn. Arka Kumar Nag',
      title: 'Chairperson, Matri Samman 2025',
      image: 'arka.jpg',
      text: `Welcome to Matri Samman 2025!
As Chairperson of Matri Samman 2025, it's my honor to extend a warm welcome to our flagship event!

Matri Samman is where the Rotary Club of Bengal Presidency proudly recognizes and celebrates the incredible artistry and dedication behind Durga Puja. We're excited to once again award the top Durga Puja pandals across various categories, highlighting their creativity and community spirit.

Thank you for being a part of this special celebration.`
    },
    {
      name: 'Rtn. Subham Das',
      title: 'Convenor, Matri Samman 2025 & Secretary, Rotary Club of Bengal Presidency',
      image: 'shubham.jpg',
      text: `Welcome to Matri Samman 2025!
As Convenor of Matri Samman 2025 and Secretary of the Rotary Club of Bengal Presidency, I'm delighted to welcome you to our flagship event!

Matri Samman is where we proudly recognize and celebrate the incredible creativity and hard work behind the top Durga Puja pandals. We're excited to honor their outstanding contributions across various categories, showcasing the true spirit of this beloved festival.

Thank you for being a part of this special initiative.`
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center py-12 px-8 font-eagle text-[#5a0404]" >
      <h1 className="text-4xl font-bold text-center mb-12">Messages from the team</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-[rgba(255,0,0,0.15)] backdrop-blur-lg border-2 border-[rgba(81,25,11,0.4)] p-4 rounded-2xl shadow-lg overflow-hidden flex flex-col "
          >
           <div className="p-4 flex justify-center">
  <img
    src={msg.image}
    alt={msg.name}
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl object-contain"
  />
</div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="whitespace-pre-line text-md mb-2">{msg.text}</p>
              <div className="mt-auto">
                <p className="font-bold text-xl text-[#FFD700]">{msg.name}</p>
                <p className="text-sm text-[#FFD700]">{msg.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
