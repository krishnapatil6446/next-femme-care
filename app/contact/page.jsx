"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#FDE6D5] py-16 px-4 lg:px-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#BF6159] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
          <div className="w-16 h-1 bg-[#BF6159] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#BF6159] text-white font-bold py-3 rounded-lg shadow-md hover:bg-[#A4504F] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg font-medium">
                <span className="font-bold text-[#BF6159]">Email:</span>{" "}
                support@skincare.com
              </p>
              <p className="text-gray-600 text-lg font-medium mt-4">
                <span className="font-bold text-[#BF6159]">Phone:</span> +1
                234-567-890
              </p>
              <p className="text-gray-600 text-lg font-medium mt-4">
                <span className="font-bold text-[#BF6159]">Address:</span> 123
                Beauty Ave, Skintown, USA
              </p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white mt-16 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#BF6159] text-center mb-6">
            Office Hours
          </h2>
          <div className="flex justify-between items-center text-gray-700">
            <p>
              <span className="font-bold">Monday - Friday:</span> 9:00 AM - 6:00 PM
            </p>
            <p>
              <span className="font-bold">Saturday:</span> 10:00 AM - 4:00 PM
            </p>
            <p>
              <span className="font-bold">Sunday:</span> Closed
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-[#BF6159] text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800">
                How can I track my order?
              </h3>
              <p className="text-gray-600 mt-2">
                You can track your order by logging into your account and
                visiting the "My Orders" section.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, we offer worldwide shipping. Shipping times and fees vary
                based on your location.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-[#BF6159] text-center mb-6">
            Find Us Here
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087897!2d144.95373531531673!3d-37.81627944202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b9cb2529f0!2s123%20Beauty%20Ave!5e0!3m2!1sen!2sus!4v1615162379874!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
