import React from 'react';

interface RoomCardProps {
  name: string;
  features: string[];
  description: string;
  tags: string[];
  href: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  name,
  features,
  description,
  tags,
  href,
}) => {
  return (
    <div className="flex flex-col bg-white border border-border-default">
      {/* Placeholder image */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-400 text-4xl">📷</div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-brand-subtle text-brand-primary border border-brand-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Room name */}
        <h3 className="text-h4 font-heading font-medium text-text-primary mb-2">
          {name}
        </h3>

        {/* Features */}
        <p className="text-sm text-text-secondary mb-4">
          {features.join(', ')}
        </p>

        {/* Description */}
        <p className="text-text-md text-text-primary leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-auto">
          <a 
            href={href}
            className="inline-block w-full px-6 py-2 text-sm font-medium text-center bg-white text-brand-primary border border-brand-primary hover:bg-brand-subtle transition-colors"
          >
            View Room
          </a>
        </div>
      </div>
    </div>
  );
};
