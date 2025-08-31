// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 👈 import Link
import logo from "../assets/ALPLogo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-20 transform transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="ALP Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600 transition block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-600 transition block py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:text-green-600 transition block py-2"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-600 transition block py-2"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/referral"
              className="flex items-center px-4 py-2 font-semibold rounded-lg shadow-md text-white 
                 bg-gradient-to-r from-red-500 to-purple-500 
                 bg-[length:300%_300%] animate-gradient-rainbow transition"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="https://www.svgrepo.com/show/503812/gift.svg"
                alt="gift"
                className="w-5 h-5 mr-2"
              />
              Referral
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-gray-800 cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md absolute w-full left-0 top-full">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/referral"
                className="flex items-center px-4 py-2 font-semibold rounded-lg shadow-md text-white 
                 bg-gradient-to-r from-red-500 to-purple-500 
                 bg-[length:300%_300%] animate-gradient-rainbow transition"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="https://www.svgrepo.com/show/503812/gift.svg"
                  alt="gift"
                  className="w-5 h-5 mr-2"
                />
                Referral
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Gradient Animation Keyframes */}
      <style jsx>{`
        @keyframes gradient-rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-rainbow {
          animation: gradient-rainbow 3s ease infinite;
        }
      `}</style>
    </nav>
  );
}
