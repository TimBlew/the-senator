import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px]">
      {/* Background Image */}
      <Image
        src="/images/senator-main.jpg"
        alt="The Heber Senator"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-hero font-heading font-medium text-text-light mb-6">
          The Heber Senator
        </h1>
        <p className="text-text-lg text-text-light/90 max-w-2xl mb-8">
          A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#rooms"
            className="px-8 py-3 text-sm font-medium bg-white text-brand-primary hover:bg-gray-100 transition-colors"
          >
            View Our Rooms
          </a>
          <a 
            href="#book"
            className="px-8 py-3 text-sm font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors"
          >
            Book your stay
          </a>
        </div>
      </div>
    </section>
  );
};