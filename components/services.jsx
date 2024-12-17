import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      image: '/facial-treatments.jpg',
      title: 'Facial Treatments',
      items: [
        'Anti-aging facials to smooth out wrinkles and fine lines',
        'Hydrating facials for a glowing, refreshed complexion',
        'Acne treatments that work to clear up skin and boost confidence',
        'Customized facials tailored to your unique skincare needs',
      ],
    },
    {
      image: '/laser-therapy.jpg',
      title: 'Laser & Light Therapy',
      items: [
        'IPL (Intense Pulsed Light) for skin rejuvenation and glow',
        'Effective acne scar treatments',
        'Pigmentation reduction to brighten your skin tone',
      ],
    },
    {
      image: '/body-treatments.jpg',
      title: 'Body Treatments',
      items: [
        'Body contouring to help you feel more confident in your skin',
        'Cellulite treatments to smooth and tighten the skin',
        'Luxurious scrubs & wraps that leave your skin feeling soft and nourished',
      ],
    },
    {
      image: '/hair-removal.jpg',
      title: 'Hair Removal',
      items: [
        'Gentle yet effective laser hair removal',
        'Traditional waxing for smooth, hair-free skin',
      ],
    },
  ];

  return (
    <div className="bg-[#FFF9F4] py-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6D4C41] tracking-wider">
          Our Services
        </h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              <div className="relative w-full md:w-1/2 h-64 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-[#8D6E63]">
                  {service.title}
                </h3>
                <ul className="space-y-2 list-none">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg leading-relaxed"
                    >
                      <span className="text-[#D7A88C] mt-1">•</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Add "View All Services" Button */}
        <div className="text-center mt-12">
          <Link href="/all-services"
         className="inline-block px-6 py-3 text-lg font-medium text-white bg-[#8D6E63] rounded-full shadow-md hover:bg-[#6D4C41] transition duration-300">
              View All Services
          
          </Link>
        </div>
      </div>
    </div>
  );
}