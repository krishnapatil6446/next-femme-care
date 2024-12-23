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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden"; // Disable scrolling when menu is open
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/98 backdrop-blur-md shadow-sm"
            : " bg-[#f3e0d9]"
        }`}
      >
        <div className="container mx-auto ">
          <div className="flex justify-between items-center h-16 lg:h-16">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/white-bg-hemkanti_mw-removebg-preview.png"
                alt="HEMKANTI Logo"
                width={150}
                height={38}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-10">
                {[
                  { name: "HOME", href: "/" },
                  { name: "ABOUT", href: "/about" },
                  { name: "SERVICES", href: "/services" },
                  { name: "PRODUCTS", href: "/product" },
                  { name: "BLOG", href: "https://www.blogs.hemkanti.com" },
                  { name: "CONTACT", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-neutral-700 hover:text-[#bf6159] text-[13px] tracking-widest font-medium relative group transition-colors duration-300"
                  >
                    <span className="relative inline-block py-2">
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2"
              onClick={handleMenuClick}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-neutral-800 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-neutral-800 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-neutral-800 transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#f3e0d9] z-40 transform transition-all duration-500 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <div className="flex-1 flex flex-col space-y-2">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT", href: "/about" },
              { name: "SERVICES", href: "/services" },
              { name: "PRODUCTS", href: "/product" },
              { name: "BLOG", href: "https://www.blogs.hemkanti.com" },
              { name: "CONTACT", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#bf6159] text-2xl font-light py-3 border-b border-neutral-100 hover:pl-2 hover:text-[#bf6159] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="space-y-2 pt-2">
            <div className="flex space-x-2 pt-2 justify-center">
              <a
                href="#"
                className="text-[#bf6159] hover:text-[#bf6159] transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-[#bf6159] hover:text-[#bf6159] transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-[#bf6159] hover:text-[#bf6159]transition-colors"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to ensure navbar doesn't overlap content */}
      <div className={`h-16 ${isScrolled ? "lg:h-16" : ""}`} />
    </>
  );
};

export default Navbar;
