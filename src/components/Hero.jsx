import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">

      {/* Left Content */}
      <div className="sm:w-1/2 p-10 flex flex-col justify-center items-start gap-6 text-white relative z-10">
        
        {/* Label */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-[2px] bg-white/40"></div>
          <p className="text-sm tracking-widest font-semibold text-white/70">
            OUR BESTSELLERS
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          New Season <br /> Arrivals
        </h1>

        {/* CTA */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <p className="text-lg font-semibold">SHOP NOW</p>
          <div className="w-12 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></div>
        </div>
      </div>

      {/* Right Image with overlay and scale animation */}
      <div className="sm:w-1/2 relative">
        <img
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1200ms]"
          src={assets.hero_img}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Floating decorative blob */}
      <div className="absolute -top-10 -left-20 w-60 h-60 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
    </div>
  );
};

export default Hero;
