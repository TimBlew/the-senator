import React from 'react';
import { RoomCard } from '../ui/RoomCard';

export const FeaturedRooms: React.FC = () => {
  const rooms = [
    {
      name: 'Senator Spa Suite',
      tags: ['Suite', 'Spa'],
      features: ['King Bed', 'Jetted Tub'],
      description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
      href: '/rooms/senator-spa-suite',
    },
    {
      name: 'Tiffany Suite',
      tags: ['Suite', 'Bay Window'],
      features: ['King Bed', 'Bay Window'],
      description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
      href: '/rooms/tiffany-suite',
    },
    {
      name: 'Royal Spa Room',
      tags: ['Queen Bed', 'Spa Tub'],
      features: ['Queen Bed', 'Spa Tub'],
      description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
      href: '/rooms/royal-spa-room',
    },
  ];

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading font-medium text-text-primary mb-4">
            Featured Rooms
          </h2>
          <p className="text-text-md text-text-secondary max-w-2xl mx-auto">
            Each suite and room is thoughtfully designed with historic charm and modern comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};
