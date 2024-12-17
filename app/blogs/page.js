'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Skincare Routines for Glowing Skin',
    description:
      'Discover the best skincare routines to keep your skin healthy and glowing every day. Tips from dermatologists included!',
    fullContent: `
      Keeping your skin healthy and glowing involves consistency. Start with cleansing, followed by a gentle exfoliant, toner, serum, and moisturizer.
      Dermatologists suggest adding sunscreen during the daytime and opting for retinol or hydration boosters at night.
      Always pick products according to your skin type for the best results.
    `,
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'Natural Ingredients for Radiant Skin',
    description:
      'Learn about natural ingredients that work wonders for your skin, from aloe vera to rose water.',
    fullContent: `
      Natural ingredients like aloe vera, turmeric, and rose water are rich in vitamins and antioxidants. Aloe vera soothes and heals the skin,
      while rose water balances pH and hydrates naturally. Regular use of these ingredients will promote radiant and healthy skin.
    `,
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'How to Build Your Nighttime Skincare Routine',
    description:
      'A step-by-step guide to creating the perfect nighttime skincare routine for all skin types.',
    fullContent: `
      Nighttime routines are essential for repairing the skin. Start by removing makeup, followed by cleansing, toning, applying serum,
      and moisturizing. Use retinoids for anti-aging and hydration masks for extra care.
    `,
    image: '/images/blog3.jpg',
  },
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bg-[#FDE6D5] min-h-screen text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-skin.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-5xl font-bold text-white text-center tracking-wider">
          Our Skincare Blogs
        </h1>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Conditional Rendering */}
        {selectedBlog ? (
          // Full Blog Content
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={() => setSelectedBlog(null)}
              className="text-[#6D4C41] mb-4 hover:underline"
            >
              ← Back to Blogs
            </button>
            <h2 className="text-4xl font-bold mb-4 text-[#6D4C41]">
              {selectedBlog.title}
            </h2>
            <div className="relative w-full h-64 mb-6">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
              {selectedBlog.fullContent}
            </p>
          </div>
        ) : (
          // Blog Grid Layout
          <>
            <h2 className="text-3xl font-bold text-center mb-10">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-[#6D4C41]">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{blog.description}</p>
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="text-[#6D4C41] font-semibold hover:underline"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
