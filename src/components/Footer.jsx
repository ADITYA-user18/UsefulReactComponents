import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-100 to-gray-200 py-14 px-6 rounded-xl shadow-inner font-poppins">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-wide uppercase cursor-pointer transition-transform hover:scale-105">
            SelfCart
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            We deliver quality products at unbeatable prices.  
            Enjoy fast delivery, secure payments, and a smooth shopping experience.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm">
            <li className="hover:text-indigo-600 cursor-pointer duration-200">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer duration-200">About Us</li>
            <li className="hover:text-indigo-600 cursor-pointer duration-200">Delivery</li>
            <li className="hover:text-indigo-600 cursor-pointer duration-200">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm">
            <li className="hover:text-indigo-600 cursor-pointer duration-200">
              +91-124-785-2455
            </li>
            <li className="hover:text-indigo-600 cursor-pointer duration-200">
              support@selfcart.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <hr className="mt-10 border-gray-300" />
      <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
        © 2026 SelfCart — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
