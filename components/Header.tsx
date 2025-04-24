'use client';

import React from 'react';
import Link from 'next/link';

const COLORS = {
  accent: "#007bff",
  background: "#f8f9fa",
  text: "#000000",
};

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/">
              <img
                src="https://ext.same-assets.com/1796335204/3966176097.png"
                alt="GoMarble Logo"
              />
              <span>GoMarble</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <Link href="#" className="header-link">
              Features
            </Link>
            <Link href="#" className="header-link">
              Pricing
            </Link>
            <Link href="#" className="header-link">
              About
            </Link>
            <Link href="#" className="header-link">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <Link href="#" className="header-login">
              Log in
            </Link>
            <Link href="#" className="header-signup">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 