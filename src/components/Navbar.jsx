import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    search,
    setSearch,
    ShowSearch,
    setShowSearch,
    getCartCount,
    navigate,
  } = useContext(ShopContext);

  const navLinks = [
    { name: "HOME", to: "/" },
    { name: "COLLECTION", to: "/collection" },
    { name: "ABOUT", to: "/about" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <header className="fixed w-[80%] bg-white shadow-md z-50 rounded-2xl  ">
      <div className="container mx-auto flex items-center justify-between py-4 px-5 sm:px-10 relative ">
        {/* Brand Logo */}
        <NavLink to="/">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-wide uppercase cursor-pointer transition-transform hover:scale-105">
            SelfCart
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-10 text-[15px] font-semibold">
          {navLinks.map((link) => (
            <li key={link.to} className="group relative">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "text-indigo-600" : "text-gray-700"
                  } hover:text-indigo-600`
                }
              >
                {link.name}
              </NavLink>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:scale-110 transition-transform"
          />

          {/* Profile Dropdown */}
          <div className="relative group">
            <Link to="/login">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              />
            </Link>

            <div
              className="absolute right-0 mt-3 w-36 bg-white shadow-lg rounded-md opacity-0 scale-95 pointer-events-none 
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 p-3 space-y-2"
            >
              <p className="cursor-pointer hover:text-indigo-600 transition-colors">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-indigo-600 transition-colors">
                Orders
              </p>
              <p className="cursor-pointer hover:text-indigo-600 transition-colors">
                Logout
              </p>
            </div>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
            />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-[10px] flex items-center justify-center rounded-full animate-pulse">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <img
            src={assets.menu_icon}
            onClick={() => setVisible(true)}
            alt="Menu"
            className="w-6 cursor-pointer sm:hidden hover:scale-110 transition-transform"
          />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg z-[100] transition-all duration-500 sm:hidden ${
            visible ? "w-3/4 p-6" : "w-0 p-0"
          }`}
        >
          {visible && (
            <div className="flex flex-col h-full animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={() => setVisible(false)}
                className="flex items-center gap-3 p-3 mb-4 hover:text-indigo-600 transition-colors"
              >
                <img
                  src={assets.dropdown_icon}
                  alt="Back"
                  className="h-4 rotate-180"
                />
                <p className="font-medium text-[15px]">Back</p>
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setVisible(false)}
                    className="p-3 border rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
