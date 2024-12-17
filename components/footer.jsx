export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Hemkranti</h3>
          <p className="text-sm">
            Unlocking the secret to smoother, hydrated skin with premium treatments and care.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Pune, Maharashtra</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@hemkranti.com</li>
            <li>⏰ Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-400 transition"
            >
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-red-500 transition"
            >
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-300 transition"
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Hemkranti. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
