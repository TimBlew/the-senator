'use client';

import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/images/senator-icon.svg" 
              alt="The Heber Senator" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/our-rooms" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
              Our Rooms
            </a>
            <a href="/policies" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
              Policies
            </a>
            <a href="/about" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">
              About Us
            </a>
            <a 
              href="#book"
              className="px-6 py-2 text-sm font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors"
            >
              Check Availability
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            <div className="flex flex-col gap-4">
              <a href="/our-rooms" className="text-md text-text-secondary hover:text-brand-primary py-2">
                Our Rooms
              </a>
              <a href="/policies" className="text-md text-text-secondary hover:text-brand-primary py-2">
                Policies
              </a>
              <a href="/about" className="text-md text-text-secondary hover:text-brand-primary py-2">
                About Us
              </a>
              <a 
                href="#book"
                className="w-full px-6 py-2 text-sm font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};