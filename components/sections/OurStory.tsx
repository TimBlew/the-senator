import React from 'react';

export const OurStory: React.FC = () => {
  return (
    <section className="py-16 bg-bg-subtle">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-h2 font-heading font-medium text-brand-primary text-center mb-8">
          Our Story
        </h2>

        {/* Placeholder images */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-4xl">📷</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-md text-text-primary leading-relaxed mb-6">
            Built in 1902 by Utah State Senator Joseph R. Murdock for his wife Margaret and eleven children, 
            the Heber Senator preserves the character and warmth of its historic origins.
          </p>
          <a 
            href="/our-story"
            className="inline-block px-6 py-2 text-sm font-medium bg-white text-brand-primary border border-brand-primary hover:bg-brand-subtle transition-colors"
          >
            Learn about our story
          </a>
        </div>
      </div>
    </section>
  );
};
