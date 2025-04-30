import React from 'react';

const COLORS = {
  background: "#f8f9fa",
  accent: "#007bff",
  text: "#000000",
  card: "#ffffff",
  secondary: "#6c757d",
  darkblue: "#0c3655",
  skyblue: "#1A8DE1",
  border: "#8d8e8e",
};

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md bg-blue-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/logo.webp"
              alt="GoMarble Logo"
              className="h-10 w-10 mr-3"
            />
            <span className="text-2xl font-bold" tabIndex={0}>
              GoMarble
            </span>
          </div>
          <nav className="flex items-center space-x-6">
            <a
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium"
            >
              Pricing
            </a>
            <a
              href="/labs"
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium"
            >
              Labs
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 