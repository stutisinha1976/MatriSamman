import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-white/10 backdrop-blur-md border-t border-white/20 text-[#FBE6C2] font-eagle text-center py-6 px-4 shadow-md">
      
      {/* Eyes and Title */}
      <img src="/eyes.png" alt="Eyes" className="w-20 mx-auto mb-2" />
      <h2 className="text-lg font-bold tracking-wider uppercase">For Any Queries</h2>
      <img src="/imageb.png" alt="Underline" className="w-100 mx-auto mb-4" />


      {/* Responsive Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-sm md:text-base text-center lg:text-left items-start">
        
        {/* Column 1: Logo */}
        <div className="flex justify-center lg:justify-start">
          <img src="/logo2.png" alt="Matri Samman Logo" className="w-24 md:w-48" />
        </div>

        {/* Column 2: Contact List */}
        <div className="space-y-3">
          <p>Soumodip Adhikary<br /><span className="text-white font-mono">(+91 8584974241)</span></p>
          <p>Roshnai Sen<br /><span className="text-white font-mono">(+91 8910745256)</span></p>
          <p>Sohom Kumar Sen<br /><span className="text-white font-mono">(+91 9874645979)</span></p>
          <p>Rajdeep Mondal<br /><span className="text-white font-mono">(+91 9163285869)</span></p>
        </div>

        {/* Column 3: With Regards + Mail + Facebook */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <div className="italic text-center lg:text-left">
            <p className="font-bold">With regards,<br />Rtn. Sirsanya Bandopadhyay</p>
            <p>President, R.Y. 2025-2026</p>
            <p className="text-white font-mono">(+91 98306 64245)</p>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Mail className="w-5 h-5 text-white" />
            <p className="text-sm font-semibold">matrisamman25@gmail.com</p>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <FaFacebook className="w-5 h-5 text-[#e6d7e6]" />
            <a
              href="https://www.facebook.com/rctMatriSamman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline text-[#e6d7e6]"
            >
              facebook.com/rctMatriSamman
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
