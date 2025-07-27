"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Ziad from "../../Images/1707246690922.jpeg";
export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsClick(!isClick);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsClick(false);
    }
  };

  useEffect(() => {
    if (isClick) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClick]);

  return (
    <div>
      <nav className="bg-transparent z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white font-bold">
                  &lt;<span className="text-red-600">Z</span>/&gt;
                </a>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/" className="text-white p-2 underline-animation">
                  Home
                </a>
                <a
                  href="#Project"
                  className="text-white p-2 underline-animation"
                >
                  Projects
                </a>
                <a href="#About" className="text-white p-2 underline-animation">
                  About me
                </a>
                <a
                  href="#Contact"
                  className="text-white p-2 underline-animation"
                >
                  Contact
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1f6Q-MXY4RHRNyWiEuJMZzVCN-4sUq8FM/view?usp=sharing"
                  className="text-white p-2 underline-animation"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNav}
              >
                {isClick ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform ${
            isClick ? "translate-x-0" : "-translate-x-full"
          } bg-black bg-opacity-80`}
        >
          {/* Sidebar Menu */}
          <div
            ref={menuRef}
            className="w-64 h-full bg-gray-900 p-6 shadow-lg flex flex-col items-center space-y-6 overflow-y-auto"
          >
            {/* Logo */}
            <a href="/" className="text-white font-bold text-2xl">
              &lt;<span className="text-red-600">Z</span>/&gt;
            </a>

            {/* Profile Image */}
            <Image
              src={Ziad}// Put your image in the /public folder (e.g. /public/me.jpg)
              alt="Ziad's profile"
              className="w-24 h-24 rounded-full border-2 border-white object-cover"
            />

            {/* Links */}
            <a
              href="/"
              className="text-white text-lg underline-animation"
              onClick={toggleNav}
            >
              Home
            </a>
            <a
              href="#Project"
              className="text-white text-lg underline-animation"
              onClick={toggleNav}
            >
              Projects
            </a>
            <a
              href="#About"
              className="text-white text-lg underline-animation"
              onClick={toggleNav}
            >
              About me
            </a>
            <a
              href="#Contact"
              className="text-white text-lg underline-animation"
              onClick={toggleNav}
            >
              Contact
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1f6Q-MXY4RHRNyWiEuJMZzVCN-4sUq8FM/view?usp=sharing"
              className="text-white text-lg underline-animation"
              onClick={toggleNav}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
