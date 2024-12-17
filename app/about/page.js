import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-16 px-6 relative overflow-hidden">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-transparent to-transparent opacity-30 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#BF6159] glow-text">About Us</h2>
        <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          At SkinGlow, we’re committed to helping you achieve luminous, radiant skin. Discover our story, mission, and the inspiration behind our products that celebrate your natural beauty.
        </p>
        <div className="w-16 h-1 bg-[#BF6159] mx-auto mt-6 rounded-full shimmer-effect"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image */}
          <Image
            src="/images/about-us-shiny.jpg"
            alt="About Us"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          />

          {/* Text Content */}
          <div>
            <h3 className="text-4xl font-semibold text-[#BF6159] mb-6 glow-text">Our Story</h3>
            <p className="text-gray-700 leading-loose">
              SkinGlow was born out of a passion for creating skincare that radiates confidence. Our journey started with the belief that healthy skin is the foundation of self-care and self-love. By combining cutting-edge technology with natural ingredients, we’ve crafted a range of products designed to suit all skin types.
            </p>
            <p className="text-gray-700 leading-loose mt-6">
              We’re not just about skincare; we’re about self-expression and empowerment. Join us in celebrating the glow you were born with.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-16 relative z-10">
        <h3 className="text-center text-3xl font-semibold text-[#BF6159] mb-8 glow-text">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Radiance",
              description: "Empowering every individual to embrace their natural glow.",
            },
            {
              title: "Innovation",
              description: "Bringing you the best of science and nature in every product.",
            },
            {
              title: "Sustainability",
              description: "Creating eco-friendly solutions that care for you and the planet.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#FFF5F3] to-[#FDE6D5] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <h4 className="text-xl font-semibold text-[#BF6159] mb-4">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 relative z-10">
        <h3 className="text-center text-3xl font-semibold text-[#BF6159] mb-8 glow-text">
          Meet the Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Jane Doe", role: "Founder & CEO", image: "/images/team-member1.jpg" },
            { name: "John Smith", role: "Lead Dermatologist", image: "/images/team-member2.jpg" },
            { name: "Emily White", role: "Product Designer", image: "/images/team-member3.jpg" },
          ].map((teamMember, index) => (
            <div
              key={index}
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-lg"
              />
              <h4 className="text-xl font-semibold text-[#BF6159] mt-4">{teamMember.name}</h4>
              <p className="text-gray-600">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
