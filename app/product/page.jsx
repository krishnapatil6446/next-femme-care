import ProductCard from "../../components/productCard";
import SectionHeader from "../../components/SectionHeader";

const Products = () => {
  const products = [
    {
      name: "Gentle Cleanser",
      description: "Boosts skin radiance and evens out tone.",
      image: "/images/Products/product8.jpg",
    },
    {
      name: "Exfoliating Scrub",
      description: "Gently removes dead skin for a smoother texture.",
      image: "/images/Products/product9.jpg",
    },
    {
      name: "Hydrating Moisturizer",
      description: "Deeply hydrates and nourishes for soft skin.",
      image: "/images/Products/product2.jpg",
    },

    {
      name: "Face Serum",
      description: "Shields skin from harmful UV rays all day.",
      image: "/images/Products/product6.jpg",
    },
    {
      name: "Sunscreen SPF 50",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product3.jpg",
    },
    {
      name: "Anti-Aging Cream",
      description: "Reduces fine lines and firms up the skin.",
      image: "/images/Products/product5.jpg",
    },

    {
      name: "Skin Toner",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product4.jpg",
    },
    {
      name: "Night Care",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product7.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            // description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
