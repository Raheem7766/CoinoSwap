import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Logo from "../assets/Logo.png";
import usa from "../assets/usa.png";
import { IoLogOut } from "react-icons/io5";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Affiliate Program");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsOpen(false);
  };

  return (
    <nav className="w-full text-white flex items-center justify-between px-12 py-6">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-400">
        {[
          "How It Works",
          "Currencies",
          "FAQ",
          "Affiliate Program",
          "Blog",
          "About Us",
          "Order Tracker",
        ].map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            className={`cursor-pointer flex items-center transition-colors duration-200 ${
              activeItem === item
                ? "text-white font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item === "Order Tracker" ? (
              <>
                {item}
                <MdKeyboardArrowDown className="ml-1" />
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="relative flex items-center">
          <img src={usa} alt="Flag" className="w-7 h-7 rounded-full" />
          <MdKeyboardArrowDown className="text-white ml-1" />
        </div>

        <div className="relative" ref={dropdownRef}>
          <div
            className={`border border-gray-600 rounded-[40px] w-11 h-7 flex items-center justify-center cursor-pointer transition-all duration-200 ${
              isOpen ? "bg-white" : "bg-[#1A1918]"
            }`}
            onClick={toggleDropdown}
          >
            <FaUserCircle
              className={`transition-colors duration-200 ${
                isOpen ? "text-[#1A1918]" : "text-white"
              }`}
            />
            {isOpen ? (
              <MdKeyboardArrowUp
                className={`transition-colors duration-200 ${
                  isOpen ? "text-[#1A1918]" : "text-white"
                }`}
              />
            ) : (
              <MdKeyboardArrowDown
                className={`transition-colors duration-200 ${
                  isOpen ? "text-[#1A1918]" : "text-white"
                }`}
              />
            )}
          </div>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-[20px] shadow-lg overflow-hidden z-50 min-w-[120px]">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 text-gray-700"
              >
                <IoLogOut className="text-black" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
