import React from 'react';

export default function WhyChooseHemkanti() {
  const features = [
    {
      title: 'Experienced Experts',
      description:
        'Our skincare clinic is lead by professionals to provide expert advice and proven solutions.',
      icon: 'fa-user-md',
    },
    {
      title: 'Personalized Care',
      description:
        'Glow like never before, Personalized attention to your skin with exclusive offers and treatments..',
      icon: 'fa-user-check',
    },
    {
      title: 'Latest Technology',
      description:
        'Stay ahead in skin-care, with cutting-edge treatments powered by advanced technology at our clinic.',
      icon: 'fa-microchip',
    },
    {
      title: 'Trusted, High-Quality Products',
      description:
        'Experience premium care with out clinic’s, with top quality products designed for quality and lasting results.',
      icon: 'fa-leaf',
    },
    {
      title: 'A Relaxing, Healing Space',
      description:
        'Give your Skin and Body a break , with a skincare healing space, where comfort meets expertise for a refreshing and rejuvenating skincare journey.',
      icon: 'fa-spa',
    },
     {
      title: 'Comprehensive Follow-Up',
      description:
        'Achieve and maintain Glass Skin with our clinic’s detailed follow up care, tailored to your needs.',
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
