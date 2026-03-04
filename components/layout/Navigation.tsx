'use client';

import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#F4EFEC',
        borderBottom: '1px solid #E1D7D1',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '16px',
          display: 'flex',
          alignItems: 'stretch',
          height: '48px',
          gap: '8px',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: 'auto' }}>
          <img
            src="/images/senator-icon.svg"
            alt="The Heber Senator"
            style={{ width: '46px', height: '32px', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex" style={{ alignItems: 'stretch', gap: '0' }}>
          <a href="/our-rooms" style={{ fontSize: '14px', color: '#592524', padding: '0 16px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            Our Rooms
          </a>
          <a href="/policies" style={{ fontSize: '14px', color: '#592524', padding: '0 16px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            Policies
          </a>
          <a href="/about" style={{ fontSize: '14px', color: '#592524', padding: '0 16px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            About Us
          </a>
          <a href="#book" style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF', background: '#A83E3E', padding: '0 24px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
            Check Availability
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ padding: '0 16px', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="#592524" viewBox="0 0 24 24">
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
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid #E1D7D1',
            padding: '16px',
            background: '#F4EFEC',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <a href="/our-rooms" style={{ fontSize: '14px', color: '#592524', padding: '8px 0', textDecoration: 'none' }}>
            Our Rooms
          </a>
          <a href="/policies" style={{ fontSize: '14px', color: '#592524', padding: '8px 0', textDecoration: 'none' }}>
            Policies
          </a>
          <a href="/about" style={{ fontSize: '14px', color: '#592524', padding: '8px 0', textDecoration: 'none' }}>
            About Us
          </a>
          <a href="#book" style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF', background: '#A83E3E', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', textAlign: 'center' }}>
            Check Availability
          </a>
        </div>
      )}
    </nav>
  );
};