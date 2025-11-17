import React from "react";
import TiltedCard from "../Responsive/TiltedCard";
import LightRays from "../Responsive/LightRays"; 
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">

      {/* 🔥 Background Light Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.3}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.08}
          distortion={0.05}
        />
      </div>

      {/* Left Content */}
      <div className="sm:w-1/2 p-10 flex flex-col justify-center items-start gap-6 text-white relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-[2px] bg-white/40"></div>
          <p className="text-sm tracking-widest font-semibold text-white/70">
            OUR BESTSELLERS
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          New Season <br /> Arrivals
        </h1>

        <div className="flex items-center gap-3 group cursor-pointer">
          <p className="text-lg font-semibold">SHOP NOW</p>
          <div className="w-12 h-[2px] bg-white transition-all duration-300 group-hover:w-20"></div>
        </div>
      </div>

      {/* Right Tilted Section */}
      <div className="sm:w-1/2 flex justify-center items-center py-10 relative z-10">
        <TiltedCard containerHeight="420px" containerWidth="420px">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={assets.namaste}
              alt="Hero"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </TiltedCard>
      </div>

      {/* Background Blurred Blobs */}
      <div className="absolute -top-10 -left-20 w-60 h-60 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
    </div>
  );
};

export default Hero;
