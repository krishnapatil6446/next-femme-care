"use client";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
      <Link href="/" className="flex items-center">
        {/* Add image logo */}
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
          <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 font-medium">
            About Us
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-800 font-medium">
            Products
          </Link>
          <Link href="/blogs" className="text-gray-600 hover:text-gray-800 font-medium">
            Blogs
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-800 font-medium">
            Services
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Products
          </Link>
          <Link href="/blogs" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Blogs
          </Link>
          <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
