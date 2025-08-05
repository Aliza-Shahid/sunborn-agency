// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-16 border-t border-gray-800 text-white bg-footer-pattern bg-cover bg-center">
      <p className="text-green-400 text-sm mb-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        Let’s Work Together
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2"></span>
      </p>
      <h2 className="text-3xl lg:text-5xl font-bold mb-4">
        Start Your Digital <br className="lg:hidden" /> Journey with Sunborn
      </h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        From bold ideas to powerful results, we’re ready when you are. Let’s
        create something unforgettable.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://www.facebook.com/lsunbornmarketingagency?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 duration-300"
        >
          <FaFacebookF className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/sunborncreative079?igsh=MWN3Nnh5bGlnZmllYQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 duration-300"
        >
          <FaInstagram className="text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 duration-300"
        >
          <FaLinkedinIn className="text-white" />
        </a>
        <a
          href=" https://wa.me/923190516631"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 duration-300"
        >
          <FaWhatsapp className="text-white" />
        </a>
      </div>

      <hr className="border-green-600 w-full max-w-6xl mx-auto mb-4" />
      <p className="text-gray-400 text-sm">
        Copyright © 2025 SunbornMarketingAgency
      </p>
    </footer>
  );
}
