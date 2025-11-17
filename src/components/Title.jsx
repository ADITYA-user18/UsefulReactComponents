import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col gap-1 mb-6 animate-fade-in">
      {/* Main Text */}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-gray-800">
        {text1} <span className="text-purple-600">{text2}</span>
      </h2>

      {/* Accent Line */}
      <div className="w-20 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
  );
};

export default Title;
