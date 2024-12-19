import React from 'react';

export default function WhyChooseHemkanti() {
  const features = [
    {
      title: 'Experienced Experts',
      description:
        'Our team includes some of the most talented and certified dermatologists, estheticians, and cosmetologists in Pune. We\'re here to guide you every step of the way.',
      icon: 'fa-user-md',
    },
    {
      title: 'Personalized Care',
      description:
        'Your skin is unique, and so is your treatment plan. We take the time to understand your needs and offer personalized skincare solutions that really work for you.',
      icon: 'fa-user-check',
    },
    {
      title: 'Latest Technology',
      description:
        'We invest in cutting-edge skincare technology that delivers proven results — so you always feel like you\'re getting the best care.',
      icon: 'fa-microchip',
    },
    {
      title: 'Trusted, High-Quality Products',
      description:
        'We use only the best skincare products, including trusted brands like Dermalogica, Kiehl\'s, and The Ordinary — all carefully selected for their quality and effectiveness.',
      icon: 'fa-leaf',
    },
    {
      title: 'A Relaxing, Healing Space',
      description:
        'Our clinic isn\'t just a place for treatments — it\'s a sanctuary. Come relax, unwind, and leave feeling refreshed, rejuvenated, and ready to take on the world.',
      icon: 'fa-spa',
    },
     {
      title: 'Comprehensive Follow-Up',
      description:
        'Our care doesn’t stop after your treatment. We provide thorough follow-up support and guidance to ensure long-lasting results and your complete satisfaction.',
      icon: 'fa-calendar-check',
    },
  ];

  return (
    <div className="bg-[#FDE6D5] py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6D4C41]">
          Why Choose Hemkanti?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-[#6D4C41] text-5xl mb-4">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-[#6D4C41]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
