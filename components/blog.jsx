export default function NewArrivals() {
    return (
      <section className="bg-[#FDE8D6] py-10 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="md:w-1/2 text-left space-y-5">
            <h4 className="text-sm font-semibold text-gray-700 tracking-widest">BLOGS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              NEW ARRIVALS
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Unlock the secret to smoother, plumper, and more hydrated skin with 
              hemkranti’s all new Hyaluronic Acid!
            </p>
            <p className="text-gray-600 text-sm">
              The hyaluronic acid gives deep hydration, Smooth & Firm, Gentle & Effective
            </p>
  
            {/* Button */}
            <div className="flex items-center space-x-3">
            <a href="https://www.blogs.hemkanti.com" className="bg-gray-300 px-6 py-2 rounded-full text-gray-800 font-semibold hover:bg-gray-400 transition">
  Read more
</a>

              <div className="flex justify-center items-center bg-transparent border-2 border-gray-700 w-10 h-10 rounded-full hover:bg-gray-700 group transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700 group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="/images/home/Gemini_Generated_Image_a09drda09drda09d-removebg-preview.jpg" // Replace with actual image URL
              alt="Hyaluronic Acid"
              className="rounded-lg shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  