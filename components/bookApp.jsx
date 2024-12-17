export default function BookAppointment() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] py-20 px-6 sm:px-8 lg:px-10 text-gray-700 relative">
      {/* Subtle Background Shapes */}
      <div className="absolute top-0 left-0 w-28 h-28 bg-[#FFCCBC] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#BCAAA4] rounded-full opacity-20 blur-3xl"></div>

      {/* Form Container */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Heading */}
        <div className="bg-[#8D6E63] text-white py-8 px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
            Book Your Appointment
          </h2>
          <p className="text-lg sm:text-xl opacity-90">
            Ready to Glow? Your Skin Journey Begins Here!
          </p>
        </div>

        {/* Divider Line */}
        <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#FF7043] to-[#8D6E63]"></div>

        {/* Form */}
        <div className="p-8 space-y-6">
          <form className="space-y-8">
            {/* Input Fields */}
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
              { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
              { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-[#FF7043] focus:outline-none transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>
            ))}

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Select a Service
              </label>
              <select
  id="service"
  name="service"
  defaultValue="" // Set the default value here
  className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#FF7043] focus:outline-none hover:shadow-md transition-all duration-300"
  required
>
  <option value="" disabled>
    Choose a service
  </option>
  <option value="facial">Facial</option>
  <option value="haircare">Haircare</option>
  <option value="acne-treatment">Acne Treatment</option>
  <option value="anti-aging">Anti-Aging</option>
</select>

            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#FF7043] focus:outline-none hover:shadow-md transition-all duration-300"
                required
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200"></div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7043] to-[#8D6E63] text-white py-3 px-6 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
