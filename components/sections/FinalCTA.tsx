import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="book" className="py-20 bg-bg-subtle">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-h2 font-heading font-medium text-brand-primary mb-4">
          Ready to stay with us?
        </h2>
        <p className="text-text-lg text-text-secondary mb-8">
          Explore our rooms and check availability for your perfect mountain getaway.
        </p>
        <a 
          href="#"
          className="inline-block px-10 py-4 text-md font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors"
        >
          Check availability
        </a>
      </div>
    </section>
  );
};
