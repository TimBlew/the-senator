import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '1902', label: 'Established' },
    { value: '10', label: 'Unique Rooms & Suites' },
    { value: '4', label: 'Nearby Ski Resorts' },
    { value: '3', label: 'Lakes within reach' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-h1 font-heading font-bold text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
