import Image from "next/image";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="card-container">
      <div className="w-20 h-20 mx-auto mb-4 relative">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }} loading="eager"
          className="rounded-full border-4 border-[#BF6159]"
        />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="btn-primary">Learn More</button>
    </div>
  );
};

export default ServiceCard;
