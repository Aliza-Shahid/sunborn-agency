import React from "react";
import bg1 from "../assets/sunbornbg.png";
import bg2 from "../assets/servicebg.png";
import bggg from "../assets/bggg.png";

function Services() {
  return (
    <>
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${bggg})` }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center px-4">
          Services
        </h1>
      </div>
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-no-repeat bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="relative border border-green-500 rounded-3xl p-4 max-w-3xl w-full shadow-lg">
          <div className="bg-[#2a2a2a] rounded-[15px] p-6 sm:p-8 text-center">
            <p className="text-green-400 text-sm font-medium mb-4 tracking-wide">
              ━ Transform Your Digital Presence ━
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Partner with <br /> Sunborn Today!
            </h1>
            <p className="text-gray-300 mb-8 text-sm sm:text-base">
              Empower your brand with bold strategies, stunning visuals, and
              smart marketing solutions.
              <br className="hidden sm:block" />
              From clicks to conversions, we help you shine across every digital
              touchpoint.
            </p>
            <a
              href="https://wa.me/923190516631"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-300 transition w-full sm:w-auto">
                GET STARTED
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Digital Values Section */}
      <div
        className="bg-black text-white w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-green-500 font-medium mb-2">━ Our Value</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Values That Define
              <br />
              Our Digital Approach
            </h1>
          </div>

          <div className="flex flex-col gap-12">
            {["Innovation", "Quality Excellence"].map((title, index) => {
              const descs = [
                "We embrace change, think boldly, and explore new ideas to craft cutting-edge digital solutions that set your brand apart.",
                "From concept to execution, we hold ourselves to the highest standards delivering work that's polished, purposeful, and performance-driven.",
              ];
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-white rounded-full p-5">
                    <div className="w-3 h-3 bg-green-500 rotate-45"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-400">{descs[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div
        className="relative w-full bg-gradient-to-br from-black to-[#0a0f0b] px-4 sm:px-8 md:px-12 lg:px-20 py-24 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Pricing Plans
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Flexible, scalable packages designed to grow with your business.
            Choose the plan that fits your goals and budget.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {[
            "Starter Booster",
            "Growth Accelerator",
            "Brand Dominator",
            "Tailored Growth Plan",
          ].map((title, idx) => {
            const descriptions = [
              "Kickstart your online presence with essential ads, design, and basic branding.",
              "Scale your brand with multi-platform marketing and strategic content creation.",
              "Dominate the digital space with advanced campaigns, automation, and full brand management.",
              "A fully customized marketing solution designed around your unique goals, industry, and budget.",
            ];
            const featuresList = [
              [
                "Ad Campaigns: 1 Meta (Facebook & Instagram) and 1 Google Search campaign, with optional TikTok Ads.",
                "Online Presence: Basic Shopify store (up to 3 pages), branding (logo + color palette), and on-page SEO for 3 pages.",
                "Content Creation: 6 custom social media posts per month to engage your audience.",
                "Performance Tracking: Monthly performance report to monitor and refine your digital growth.",
              ],
              [
                "Multi-Platform Ads: Run up to 3 ad campaigns across Meta, Google, and TikTok with expert PPC management.",
                "Store & SEO Upgrade: Customized Shopify store with intermediate on-page and technical SEO for 10 pages.",
                "Content & Engagement: 12-15 social posts/month, blogs, visuals, and 2 email campaigns to boost interaction.",
                "Strategy & Insights: Ongoing digital consulting plus detailed monthly analytics and performance reporting.",
              ],
              [
                "Full Ad & PPC Control: Unlimited ad campaigns across Meta, Google, and TikTok with complete PPC and budget management.",
                "eCommerce Powerhouse: Full Shopify setup/redesign, advanced SEO (on-page, off-page, technical), and CRO for high conversions.",
                "Elite Content & Influence: 20+ premium posts, videos/reels, email marketing (4+ campaigns/month), and influencer collaborations.",
                "Total Brand Management: Social media actions all major platforms, automation setup, reputation management, and custom strategy sessions.",
              ],
              [
                "Personalized digital strategy based on your business goals & budget.",
                "Flexible selection of services: Ads, SEO, Content, Website & more.",
                "Ideal for any stage—from startups to scaling enterprises.",
                "Includes dedicated consultation, reporting & strategy support.",
              ],
            ];

            return (
              <div
                key={idx}
                className="bg-[#1f1f1f] p-6 sm:p-8 rounded-2xl shadow-md w-full"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {title}
                    </h2>
                    <p className="mt-2 text-gray-400">{descriptions[idx]}</p>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    {featuresList[idx].map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">●</span>
                        <p className="text-gray-200">{feature}</p>
                      </div>
                    ))}
                    <a
                      href="https://wa.me/923190516631"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full sm:w-auto mt-4 px-5 py-2 bg-[#121212] text-white rounded-full hover:bg-white hover:text-black transition">
                        GET STARTED
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div
        className="relative w-full bg-gradient-to-br from-black to-[#0a0f0b] px-4 sm:px-8 md:px-12 lg:px-20 py-24 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-green-500 font-medium mb-2">━ How it works</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              How Sunborn Delivers Results:
              <br /> A Step-by-Step Guide
            </h2>
            <p className="text-gray-400 max-w-lg mt-2 md:mt-0 text-sm sm:text-base">
              At Sunborn, we turn ideas into impact through a clear, strategic
              workflow. From discovery to execution, we collaborate with you
              every step creating digital solutions that are bold, data-driven,
              and built to perform.
            </p>
          </div>

          {[
            "Discover & Strategize",
            "Create & Execute",
            "Analyze & Optimize",
          ].map((step, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              } mb-10`}
            >
              <div className="bg-[#101110] rounded-2xl border border-white/10 p-8 w-full max-w-xl">
                <div className="flex items-start gap-6">
                  <div className="bg-white text-black font-medium px-6 py-3 rounded-full text-sm shrink-0">
                    Step {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step}</h3>
                    <p className="text-gray-400">
                      {i === 0 &&
                        "We start by understanding your goals, audience, and challenges — then craft a tailored strategy that aligns with your brand vision and business objectives."}
                      {i === 1 &&
                        "Our team brings your strategy to life through impactful designs, compelling content, and performance-focused campaigns across digital platforms."}
                      {i === 2 &&
                        "We don't stop at launch. We track results, measure performance, and continuously optimize to ensure your brand grows stronger every day."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
