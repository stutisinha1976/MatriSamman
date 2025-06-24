import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-[#5a0404] font-eagle text-center">
      
      {/* Heading with Eyes */}
      <div className="relative flex flex-col items-center mb-4">
        {/* Eyes Image Positioned Above */}
        <img
          src="/eyes.png"
          alt="Eyes"
          className="w-20 md:w-40 absolute md:-top-10 "
        />

        <h2 className="text-3xl md:text-4xl font-bold mt-12">About Us</h2>
        <img
          src="/imageb.png"
          alt="Underline"
          className="w-32 md:w-100"
        />
      </div>

      {/* Logo and Content */}
      <div className="max-w-5xl w-full flex flex-col items-center md:flex-row md:items-start md:text-left mt-6">
        
        {/* Logo Image */}
        <img
          src="/logo2.png"
          alt="Matri Samman Logo"
          className="w-56 md:w-100 object-contain mb-6 md:mb-0 md:mr-8"
        />

        {/* About Text */}
        <div className="text-base md:text-lg leading-relaxed max-w-2xl">
          <p>
  <strong>Matri Samman</strong> was started by <strong>Rotaract Club of Tollygunge</strong> in the year <strong>2017</strong>,
  in the heart of <strong>Kolkata</strong>, on the occasion of the biggest and the most significant
  festive occasion of Bengal: <strong>'Durga Puja'</strong>. In the year <strong>2022</strong>, <strong>Rotary Club of
  Bengal Presidency</strong> (then called <strong>Rotary Club of Biswa Bangla</strong>) joined this Project.
  Since then, <strong>Matri Samman</strong> has become one of the most celebrated <strong>flagship projects</strong>
  of Rotary Club of Bengal Presidency with <strong>brand outreach, media coverage, sponsors and promotional partners</strong>.
</p>
<br />
<p>
  Across these six years, <strong>Matri Samman</strong> has evolved to become one of the most
  popular <strong>Durga Puja Award Ceremonies</strong> of the city, as the <strong>profit is always diverted to a cause</strong>; 
  like in the year 2022, the surplus from this project was utilised to provide
  <strong>ration to the autistic people at the Missionaries of Charity, Darjeeling</strong>.
</p>

        </div>
      </div>
    </div>
  );
}

export default About;
