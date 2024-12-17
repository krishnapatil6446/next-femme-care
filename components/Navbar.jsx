"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-gradient-to-r from-white to-[#f9f9f9] transition-shadow ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/white-bg-hemkanti_mw-removebg-preview.png"
              alt="HEMKANTI Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "HOME", href: "/" },
            { name: "ABOUT US", href: "/about" },
            { name: "SERVICES", href: "/services" },
            { name: "PRODUCTS", href: "/product" },
            { name: "BLOG", href: "/blogs" },
            { name: "CONTACT US", href: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-gray-800 font-medium relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {[
          { name: "HOME", href: "/" },
          { name: "ABOUT US", href: "/about" },
          { name: "SERVICES", href: "/services" },
          { name: "PRODUCTS", href: "/product" },
          { name: "BLOG", href: "/blogs" },
          { name: "CONTACT US", href: "/contact" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 py-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
