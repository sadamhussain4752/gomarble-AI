"use client";
import React from "react";
import Header from "../../components/Header";

const blogs = [
  {
    title: "Meta Advertising Agency for Accelerated Business Growth",
    date: "Apr 16, 2025",
    author: "Hiya Chaplot",
    image: "", // Placeholder
  },
  {
    title: "Facebook Ads Agency for E-Commerce Sales Growth",
    date: "Apr 16, 2025",
    author: "Anurag Jain",
    image: "",
  },
  {
    title: "10 Powerful Tools for Facebook Ad Tracking and Analytics",
    date: "Apr 16, 2025",
    author: "Pratham Junius",
    image: "/blog-analytics.png",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a2329] text-[#AFFFFA]">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-[#0a2329]">
        <h1 className="text-5xl font-bold mb-4">Blogs</h1>
        <p className="text-2xl text-[#AFFFFA]">Latest updates and strategies from the advertising space</p>
      </section>
      {/* Blog List */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {blogs.map((blog, idx) => (
            <div key={idx} className="flex items-center gap-8 mb-12 bg-white rounded-xl shadow p-6">
              {/* Image Placeholder */}
              <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="12" fill="#e5e7eb"/><path d="M20 60L60 20M20 20L60 60" stroke="#bdbdbd" strokeWidth="4" strokeLinecap="round"/></svg>
              </div>
              {/* Blog Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#0a2329] mb-2">{blog.title}</h2>
                <div className="text-[#0a2329] text-base mb-1">{blog.date} &nbsp; | &nbsp; {blog.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Vertical Scrollable Blog List at Bottom */}
      <section className="bg-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0a2329] mb-4">More Blogs</h3>
          <div className="h-96 overflow-y-scroll pr-2 flex flex-col gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="flex items-center gap-8 bg-white rounded-xl shadow p-6 min-h-[120px]">
                {/* Image Placeholder or Real Image */}
                <div className="w-48 h-28 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="12" fill="#e5e7eb"/><path d="M20 60L60 20M20 20L60 60" stroke="#bdbdbd" strokeWidth="4" strokeLinecap="round"/></svg>
                  )}
                </div>
                {/* Blog Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#0a2329] mb-2">{blog.title}</h2>
                  <div className="text-[#0a2329] text-base mb-1">{blog.date} &nbsp; | &nbsp; {blog.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 