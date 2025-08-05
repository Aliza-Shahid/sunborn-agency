import React from "react";
import bggg from "../assets/bggg.png";
import servicebg from "../assets/servicebg.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Background with heading */}
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${bggg})` }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center px-4">
          Contact Us
        </h1>
      </div>

      {/* Contact Boxes Section */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 py-16 sm:py-20 px-4"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Phone Box */}
        <a
          href="https://wa.me/923190516631"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0f0f0f] border border-[#222] rounded-xl p-8 sm:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaPhoneAlt className="text-green-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-lg sm:text-xl font-medium mb-2">Phone Number</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            +92 319 0516631
          </p>
        </a>

        {/* Email Box */}
        <a
          href="mailto:Sunbornmarketingagency@gmail.com"
          className="bg-[#0f0f0f] border border-[#222] rounded-xl p-8 sm:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md text-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <MdEmail className="text-green-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-lg sm:text-xl font-medium mb-2">Our Email</h2>
          <p className="text-gray-300 text-sm sm:text-base break-words">
            Sunbornmarketingagency@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
