"use client";
import React from 'react';
import Image from 'next/image';
import { GraduationCap, Stars } from 'lucide-react';

const AboutUs = () => {
  const qualifications = [
    "MD in Homoeopathy",
    "Diploma in Clinical Cosmetology",
    "Diploma in Trichology"
  ];

  const achievements = [
    { value: "1000+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Treatments" }
  ];

  return (
    <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      {/* Main Header */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-6xl font-bold text-[#BF6159] glow-text mb-6">Welcome to Hemkanti</h2>
        <div className="w-24 h-1 bg-[#BF6159] mx-auto rounded-full shimmer-effect mb-6" />
      </div>

      {/* Doctor Profile Section */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/image.png"
                  alt="Dr. Akansha Kharote"
                  priority
                  width={288}
                  height={288}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-[#BF6159]" />
                  <span className="text-[#BF6159] font-semibold">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-4xl font-semibold text-[#BF6159] mb-4">Dr. Akansha Kharote</h3>
            <div className="space-y-3 mb-6">
              {qualifications.map((qualification, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-lg text-gray-700"
                >
                  <Stars className="w-5 h-5 text-[#BF6159]" />
                  <span>{qualification}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With extensive training and expertise in Homoeopathy, Clinical Cosmetology, and Trichology, 
              Dr. Akansha Kharote brings a unique, integrated approach to skincare and wellness. Her comprehensive 
              understanding of both natural healing principles and modern aesthetic techniques allows her 
              to provide personalized solutions that address not just surface concerns, but overall well-being.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Combining the wisdom of traditional healing with cutting-edge cosmetic innovations, 
              she ensures each treatment plan is tailored to achieve optimal results while maintaining 
              the highest standards of safety and care.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10 mb-16">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="text-3xl font-bold text-[#BF6159] mb-2">{achievement.value}</div>
            <div className="text-gray-600">{achievement.label}</div>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#BF6159] mb-4">Our Promise</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          At SkinGlow, we're committed to helping you achieve your best skin health through 
          a perfect blend of traditional wisdom and modern science. Every treatment is 
          personalized to your unique needs, ensuring optimal results and lasting beauty.
        </p>
      </div>

      <style jsx global>
        {`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .shimmer-effect {
            animation: shimmer 3s infinite linear;
            background: linear-gradient(to right, #BF6159 4%, #FF8176 25%, #BF6159 36%);
            background-size: 1000px 100%;
          }
          .glow-text {
            text-shadow: 0 0 10px rgba(191, 97, 89, 0.3);
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;