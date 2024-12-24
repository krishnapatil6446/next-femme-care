import Image from "next/image";

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }} loading="eager"
          className="rounded-t-xl"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#BF6159] mb-3">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
