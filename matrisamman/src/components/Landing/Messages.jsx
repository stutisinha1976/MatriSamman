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
    },
    {
      name: 'Soumodip Adhikary',
      title: 'Deputy Convenor, Matri Samman 2025',
      image: 'soumodip.jpg',
      text: `Warm greetings!

As Deputy Convenor of Matri Samman 2025, I'm thrilled to join Rtn. Subham Das in welcoming you to this grand celebration of creativity and excellence in Durga Puja pandals! We're excited to recognize and honor the talented artisans, designers, and organizers behind these magnificent creations, showcasing their innovative themes, intricate designs, and dedication to this beloved festival.

Let's come together to appreciate the true spirit of Durga Puja, highlighting Bengal's rich cultural heritage and the community's collective effort. I look forward to an unforgettable experience, filled with art, culture, and joy!

Best regards,
Soumodip Adhikary
Deputy Convenor,
Matri Samman 2025`
    }
  ];

  return (
    <div className="min-h-screen font-eagle text-[#5a0404] py-16 px-6">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.7);
        }
      `}</style>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-3xl font-bold text-[#5a0404] mb-4">
          Messages from the Team
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
      </div>

      {/* Messages Grid - All 4 in one row */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="group bg-[#5a0404]/30 backdrop-blur-md border border-[#5a0404]/30 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-[30rem]"
            >
              {/* Image Section */}
              <div className="p-5 pb-3 flex justify-center bg-gradient-to-b from-white/5 to-transparent">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl blur-lg"></div>
                  <img
                    src={msg.image}
                    alt={msg.name}
                    className="relative w-32 h-32 rounded-xl object-cover border-2 border-white/40 shadow-md group-hover:border-yellow-400/60 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 pt-3 flex flex-col flex-grow ">
                {/* Name and Title */}
                <div className="mb-4 text-center">
                  <h3 className="text-base font-bold  mb-2 leading-tight">
                    {msg.name}
                  </h3>
                  <p className="text-sm text-orange-200 font-medium leading-relaxed">
                    {msg.title}
                  </p>
                </div>

                {/* Message Text - Scrollable */}
                <div className="flex-grow overflow-hidden">
                  <div className="text-sm leading-relaxed text-[#5a0404] whitespace-pre-line overflow-y-auto max-h-48 pr-2 custom-scrollbar ">
                    {msg.text}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-4 pt-3 border-t border-white/30">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-[#5a0404]">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#5a0404]/50"></div>
          <span className="text-sm font-medium">Matri Samman 2025</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#5a0404]/50"></div>
        </div>
      </div>
    </div>
  );
}

export default Messages;