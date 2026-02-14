import React from 'react';

export const DescriptionSection: React.FC = () => {
  return (
    <section className="py-16 bg-bg-subtle">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <p className="text-text-md text-text-primary leading-relaxed">
          Built in 1902 by Utah State Senator Joseph Murdock, The Senator is a 9,000-square-foot home 
          on a quiet street in Heber City — three blocks from Main Street, fifteen minutes from Deer Valley, 
          twenty from Park City. Ten individually appointed rooms across three floors, a cooked-to-order 
          breakfast every morning, and the kind of pace that lets you get your work done and still make it 
          outside before the light changes.
        </p>
      </div>
    </section>
  );
};
