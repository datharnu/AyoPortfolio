"use client";
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Logo from "../icons/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/" },
    { name: "Digitals", href: "/digitals" },
    { name: "Videos", href: "/videos" },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-5 lg:px-20  ">
        <Logo />
        <h1 className="uppercase  text-2xl lg:text-4xl font-bold">
          CHIDERA FRANCESCA
        </h1>

        {/* Hamburger Menu Button - Only on mobile */}
        <button
          onClick={toggleMenu}
          className="size-8 hover:bg-gray-100 rounded-md p-1 transition-colors duration-200 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="size-6 stroke-1" />
          ) : (
            <AlignJustify className="size-6 stroke-1" />
          )}
        </button>

        <AlignJustify className="size-6 stroke-1 hidden lg:block" />
      </div>
      {/* Desktop Menu and Top Nav */}

      {/* Desktop Menu Items - Always visible on md+ */}
      <nav className="hidden md:flex gap-5 justify-center uppercase px-5 pb-4">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
          >
            {item.name}
          </a>
        ))}
      </nav>
      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white opacity-85 flex flex-col items-center justify-center space-y-2 md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg  text-gray-800 uppercase hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2"
          >
            <X className="size-6" />
          </button>
        </div>
      )}
    </div>
  );
}
