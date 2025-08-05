import React from "react";
import bggg from "../assets/bggg.png";
import m1 from "../assets/m1.png";
import bgImage from "../assets/tbg.png";
import bg1 from "../assets/sunbornbg.png";
import lp from "../assets/laptop.png";
import bg2 from "../assets/servicebg.png";

function AboutUs() {
  return (
    <>
      {/* Top Banner */}
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${bggg})` }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center px-4">
          About Us
        </h1>
      </div>

      {/* ✅ About Us Section */}
      <section
        className="relative bg-[#0A0F0D] text-white py-20 overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-10 z-0">
          {[...Array(72)].map((_, i) => (
            <div key={i} className="bg-green-900 border border-green-800"></div>
          ))}
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={m1}
              alt="Office Desk"
              className="w-[95%] h-auto max-h-[500px] object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-green-400 mb-2 text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              About Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              We Don't Follow <br />
              <span className="text-white">Trends,</span>{" "}
              <span className="text-white">We Create</span>
              <span className="text-green-500"> Them.</span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">
              At Sunborn, we’re passionate digital marketers, designers, and
              strategists dedicated to helping brands grow, connect, and
              convert.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              We believe in creativity backed by data and results that speak for
              themselves. With every project, we aim to empower brands to rise,
              shine, and stay ahead.
            </p>
          </div>
        </div>
      </section>

{/* ✅ Vision & Mission Section */}
<section
  className="bg-[#0A0F0D] text-white px-4 py-16 sm:px-10 md:px-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bg1})` }} // ✅ insert your image variable here
>
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Vision */}
    <div className="flex flex-col items-center justify-center">
      <p className="text-green-400 mb-2 text-sm font-medium flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
        Our Vision
      </p>
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
        Illuminate Brands, <br /> Inspire Growth.
      </h3>
      <p className="mt-10 text-gray-300 text-sm sm:text-base leading-relaxed max-w-[300px] text-left">
        To become a leading force in digital marketing by empowering brands to
        rise, shine, and lead with creativity, strategy, and innovation in the
        ever-evolving digital world.
      </p>
    </div>

    {/* Mission */}
    <div className="flex flex-col items-center justify-center">
      <p className="text-green-400 mb-2 text-sm font-medium flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
        Our Mission
      </p>
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
        Creative Strategy, Real <br /> Results.
      </h3>
      <p className="mt-10 text-gray-300 text-sm sm:text-base leading-relaxed max-w-[300px] text-left">
        To deliver impactful digital solutions through data-driven strategies,
        compelling content, and performance-focused execution helping businesses
        grow, connect, and lead with confidence.
      </p>
    </div>
  </div>
</section>

{/* ✅ Expertise Section (Image Right) */}
<section className="text-white px-4 py-16 sm:px-10 md:px-20 bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${bg2})` }} // 🔁 Replace with actual path
>
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">

    {/* Text Part (Left) */}
    <div className="w-full h-[450px] flex items-center">
      <div className="max-w-[350px] mx-auto">
        <p className="text-green-400 mb-2 text-sm font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          Expertise
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Mastering the Art <br />
          of Digital Solutions
        </h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
          At Sunborn, we specialize in results-driven digital marketing from strategic ad campaigns and SEO to branding, content creation, and Shopify design. Every solution we craft is designed to elevate your brand and drive measurable growth.
        </p>
        <div className="space-y-4 mt-10">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Client Satisfaction</span>
              <span>98%</span>
            </div>
            <div className="bg-gray-700 h-2 rounded-full w-full max-w-md">
              <div className="bg-green-400 h-2 rounded-full w-[98%] "></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Project Completion Rate</span>
              <span>95%</span>
            </div>
            <div className="bg-gray-700 h-2 rounded-full">
              <div className="bg-green-400 h-2 rounded-full w-[95%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Campaign Success Rate</span>
              <span>90%</span>
            </div>
            <div className="bg-gray-700 h-2 rounded-full">
              <div className="bg-green-400 h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

   <div className="w-full lg:w-50 flex justify-center items-center px-4 sm:px-6 lg:px-20">
  <img
    src={lp}
    alt="Expertise"
    className="w-[350px] h-[400px] object-cover rounded-2xl shadow-2xl"
  />
</div>


  </div>
</section>


    </>
  );
}

export default AboutUs;
