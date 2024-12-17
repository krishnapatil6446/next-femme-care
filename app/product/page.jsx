import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";

const Products = () => {
  const products = [
    {
      name: "Vitamin C Serum",
      description: "Boosts skin radiance and evens out tone.",
      image: "/images/vitamin-c-serum.jpg",
    },
    {
      name: "Hydrating Moisturizer",
      description: "Deeply hydrates and nourishes for soft skin.",
      image: "/images/moisturizer.jpg",
    },
    {
      name: "Exfoliating Scrub",
      description: "Gently removes dead skin for a smoother texture.",
      image: "/images/exfoliating-scrub.jpg",
    },
    {
      name: "Sunscreen SPF 50",
      description: "Shields skin from harmful UV rays all day.",
      image: "/images/sunscreen.jpg",
    },
    {
      name: "Anti-Aging Cream",
      description: "Reduces fine lines and firms up the skin.",
      image: "/images/anti-aging-cream.jpg",
    },
    {
      name: "Gentle Cleanser",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/gentle-cleanser.jpg",
    },
  ];

  return (
    <section className="bg-[#FDE6D5] py-16 px-6">
      {/* Section Header */}
      <SectionHeader
        title="Our Skincare Collection"
        subtitle="Explore our carefully curated range of skincare essentials, designed to nurture your skin naturally."
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
