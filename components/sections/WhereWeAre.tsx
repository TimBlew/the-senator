import React from 'react';

export const WhereWeAre: React.FC = () => {
  const highlights = [
    {
      title: 'Ski resorts',
      description: 'Deer Valley, Park City Mountain, Sundance, Soldier Hollow',
    },
    {
      title: 'Lakes',
      description: 'Jordanelle, Strawberry Reservoir, Deer Creek Reservoir',
    },
    {
      title: 'Experience',
      description: 'Heber Valley Railroad, Local Culture & Dining',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-h2 font-heading font-medium text-brand-primary text-center mb-4">
          Where We Are
        </h2>
        <p className="text-text-md text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Nestled in the heart of Heber Valley, surrounded by four world-class ski resorts and the natural 
          beauty of Utah mountains.
        </p>

        {/* Placeholder map */}
        <div className="w-full max-w-[816px] h-[400px] mx-auto mb-12 bg-gray-200 flex items-center justify-center border border-border-default">
          <div className="text-gray-400 text-5xl">🗺️</div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-h4 font-heading font-medium text-brand-primary mb-2">
                {item.title}
              </h3>
              <p className="text-text-md text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
