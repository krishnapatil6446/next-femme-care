import ServiceCard from "../../components/ServiceCard";
import SectionHeader from "../../components/SectionHeader";



const Services = () => {
  const services = [
    {
      title: "Anti-Aging Facials",
      description: "Smooth out wrinkles and fine lines for a youthful, glowing complexion.",
      image: "/images/facial1.jpg",
    },
    {
      title: "Hydrafacial",
      description: "Deeply cleanse, hydrate, and nourish your skin for a refreshed glow.",
      image: "/images/hydrafacial.jpg",
    },
    {
      title: "Laser Hair Removal",
      description: "Gentle and effective laser hair removal for smooth, hair-free skin.",
      image: "/images/laser-hair-removal.jpg",
    },
    {
      title: "Body Contouring",
      description: "Tighten and tone your body for a sculpted, confident look.",
      image: "/images/body-contouring.jpg",
    },
    {
      title: "IPL Skin Rejuvenation",
      description: "Treat pigmentation and scars for even-toned, radiant skin.",
      image: "/images/ipl.jpg",
    },
    {
      title: "Skin Polishing",
      description: "Exfoliate and restore your skin’s natural shine and smoothness.",
      image: "/images/skin-polishing.jpg",
    },
  ];

  return (
    <div className="bg-[#F9F2F0] py-16 px-6">
      {/* Header */}
      <SectionHeader
        title="Our Skincare Services"
        subtitle="Explore our wide range of treatments tailored to enhance your natural beauty."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
