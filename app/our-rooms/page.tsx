import React from 'react';
import { RoomCard } from '@/components/rooms/RoomCard';

const rooms = [
  {
    id: 'senator-spa-suite',
    name: 'Senator Spa Suite',
    badges: ['Suite', 'Spa'],
    bedType: 'King Bed',
    amenities: ['Jetted Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'sundance-spa-suite',
    name: 'Sundance Spa Suite',
    badges: ['Suite', 'Spa'],
    bedType: 'Queen Bed',
    amenities: ['Spa Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'tiffany-suite',
    name: 'Tiffany Suite',
    badges: ['Suite'],
    bedType: 'Queen Bed',
    amenities: ['Bay Window'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'grand-spa-room',
    name: 'Grand Spa Room',
    badges: ['Spa'],
    bedType: 'Queen Bed',
    amenities: ['Jetted Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'royal-spa-room',
    name: 'Royal Spa Room',
    badges: ['Spa'],
    bedType: 'Queen Bed',
    amenities: ['Spa Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'spa-room',
    name: 'Spa Room',
    badges: ['Spa'],
    bedType: 'Queen Bed',
    amenities: ['Whirlpool'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'blue-spa-room',
    name: 'Blue Spa Room',
    badges: ['Spa'],
    bedType: 'Queen Bed',
    amenities: ['Spa Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'gold-room',
    name: 'Gold Room',
    badges: ['Standard'],
    bedType: 'Queen Bed',
    amenities: ['Vintage Tub'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'rose-room',
    name: 'Rose Room',
    badges: ['Standard'],
    bedType: 'Queen Bed',
    amenities: ['Private Bath'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
  {
    id: 'murdock-room',
    name: 'Murdock Room',
    badges: ['ADA'],
    bedType: 'ADA Accessible',
    amenities: ['Fireplace'],
    description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.',
    image: '/images/room-placeholder.jpg',
  },
];

export default function OurRoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '72px',
              fontWeight: 500,
              color: '#592524',
              letterSpacing: '-2.88px',
              lineHeight: '72px',
              marginBottom: '16px',
            }}
          >
            Our Rooms & Suites
          </h1>
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: '20px',
              fontWeight: 400,
              color: '#A26331',
              letterSpacing: '-0.4px',
              lineHeight: '32px',
              maxWidth: '720px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            Each room is uniquely designed with historic character and modern comfort. From spa suites to charming standard rooms.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}