"use client";
import React from "react";
import Header from "../../components/Header";

const blogs = [
  {
    title: "Meta Advertising Agency for Accelerated Business Growth",
    date: "Apr 16, 2025",
    author: "Hiya Chaplot",
    image: "/meta-marketing.avif",
  },
  {
    title: "Facebook Ads Agency for E-Commerce Sales Growth",
    date: "Apr 16, 2025",
    author: "Anurag Jain",
    image: "/facebook-ads-office.avif",
  },
  {
    title: "10 Powerful Tools for Facebook Ad Tracking and Analytics",
    date: "Apr 16, 2025",
    author: "Pratham Junius",
    image: "/analytics-dashboard.avif",
  },
  {
    title: "Google Ads Agency for Rapid Lead Generation",
    date: "Apr 16, 2025",
    author: "Ashmita Das",
    image: "/google-ideas.avif",
  },
  {
    title: "Instagram Marketing Strategies for 2025",
    date: "Apr 16, 2025",
    author: "Shreya Narayan",
    image: "/instagram-social.avif",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a2329]">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-white">
        <h1 className="text-5xl font-bold mb-4">Blogs</h1>
        <p className="text-2xl text-[#0a2329]">Latest updates and strategies from the advertising space</p>
      </section>
      {/* Blog List */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-8 bg-white rounded-xl shadow p-6 ${idx !== blogs.length - 1 ? 'mb-8' : ''}`}
            >
              {/* Blog Image */}
              <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                ) : (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="12" fill="#e5e7eb"/><path d="M20 60L60 20M20 20L60 60" stroke="#bdbdbd" strokeWidth="4" strokeLinecap="round"/></svg>
                )}
              </div>
              {/* Blog Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#0a2329] mb-2">{blog.title}</h2>
                <div className="text-[#0a2329] text-base mb-1">{blog.date} &nbsp; | &nbsp; {blog.author}</div>
              </div>
            </div>
          ))}
          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#0a2329] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow hover:bg-[#14414a] transition">Load More</button>
          </div>
        </div>
      </section>
      {/* Footer (copied from pricing page) */}
      <footer className="w-full bg-white pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            {/* Logo and Description */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="GoMarble" className="h-14 w-14" />
                <span className="text-[#0a2329] text-3xl font-bold">GoMarble</span>
              </div>
              <p className="text-[#14414a] text-lg">
                AI-Assisted Performance Marketing Experts
              </p>
            </div>
            {/* Company Links */}
            <div className="md:col-span-3">
              <h3 className="text-[#14414a] font-medium text-lg mb-6 uppercase tracking-wider">Company</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Home</a></li>
                <li><a href="/blog" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Blog</a></li>
              </ul>
            </div>
            {/* Social Links */}
            <div className="md:col-span-3">
              <h3 className="text-[#14414a] font-medium text-lg mb-6 uppercase tracking-wider">Socials</h3>
              <ul className="space-y-1">
                <li><a href="/youtube" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Youtube</a></li>
                <li><a href="/linkedin" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">LinkedIn</a></li>
                <li><a href="/instagram" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Instagram</a></li>
              </ul>
            </div>
            {/* Free Tools */}
            <div className="md:col-span-3">
              <h3 className="text-[#14414a] font-medium text-lg mb-6 uppercase tracking-wider">Free Tools</h3>
              <ul className="space-y-1">
                <li><a href="/meta-ads-grader" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Meta Ads Grader</a></li>
                <li><a href="/ai-ads-analyzer" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">AI Ads Analyzer</a></li>
                <li className="flex items-center gap-1">
                  <a href="/ai-copywriter" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">AI Copywriter</a>
                  <span className="bg-[#66DDC7] text-[#0a2329] text-xs px-2 py-0.5 rounded-full font-medium">New</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1a8de1]/30">
            <p className="text-[#14414a] text-lg mb-4 md:mb-0">Copyright © GoMarble AI 2024</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Privacy Policy</a>
              <a href="/terms" className="text-[#0a2329] hover:text-[#66DDC7] text-lg">Terms of Use</a>
            </div>
          </div>
          <div className="mb-8" />
        </div>
      </footer>
    </div>
  );
} 