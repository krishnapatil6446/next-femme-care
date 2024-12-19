"use client";
import React, { useState, useEffect } from "react";
import About from "../components/about";
import WhyChooseHemkanti from "../components/whychoose";
import Services from "../components/services";
import FaqTestimonials from "../components/testimonials";
import FloatingButtonWithModal from "../components/FloatingButton";
import NewArrivals from "../components/blog";

function Home() {
  const slides = [
    {
      image: "/images/home/photo1.jpeg",
      title: "Discover Your Natural Glow",
      description: "Nourish your skin with our all-natural skincare products for a radiant look.",
    },
    {
      image: "/images/home/photo2.jpeg",
      title: "Revitalize & Rejuvenate",
      description: "Pamper your skin with gentle care to keep it smooth and youthful.",
    },
    {
      image: "/images/home/photo3.jpeg",
      title: "Your Daily Skincare Routine",
      description: "Simplify skincare with our curated routines for beautiful, healthy skin.",
    },
    {
      image: "/images/home/photo4.jpeg",
      title: "Exclusive Offers for You",
      description: "Special skincare deals tailored just for you. Feel confident and glowing.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

              {/* Caption */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-8 animate-fade-up">
                <h5 className="text-4xl sm:text-6xl font-bold mb-4 text-center animate-fade">
                  {slide.title}
                </h5>
                <p className="text-lg sm:text-2xl text-center mb-8 max-w-2xl animate-fade delay-200">
                  {slide.description}
                </p>
                {/* <button
  onClick={() => document.getElementById("bookAppointmentForm").scrollIntoView({ behavior: "smooth" })}
  className="bg-[#6D4C41] hover:bg-[#8D6E63] text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
>
  Book Appointment
</button> */}

              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300"
        >
          &#8594;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full border-2 ${
                current === index
                  ? "bg-white border-white"
                  : "bg-transparent border-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
 {/* Section Separators */}
 <div className="w-full bg-[#F9F2F0] py-6">
        <h2 className="text-center text-3xl font-bold text-[#6D4C41] tracking-wider">
          Welcome to Hemkanti Clinic
        </h2>
        <p className="text-center text-lg text-gray-600 mt-2">
          Your trusted skincare and wellness destination.
        </p>
      </div>
      {/* Content Sections */}
      <div className=" ">
        <div className="animate-fade-up">
          <About />
        </div>
        <div className="animate-fade-up delay-200">
          <WhyChooseHemkanti />
        </div>
        <div className="animate-fade-up delay-400">
          <Services />
        </div>
        <div className="animate-fade-up delay-600">
          <FaqTestimonials />
        </div>
        {/* <div id="bookAppointmentForm"
         className="animate-fade-up delay-800">
          <BookAppointment />
        </div> */}
        <div className="animate-fade-up delay-1000">
          <NewArrivals />
        
        </div>
      </div>
    </div>
  );
}

export default Home;
