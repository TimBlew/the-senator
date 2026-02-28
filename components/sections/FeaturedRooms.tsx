import React from 'react';
import { RoomCard } from '../ui/RoomCard';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface RoomData {
  name: string;
  tags: string[];
  features: string[];
  description: string;
  href: string;
  image?: any;
}

interface FeaturedRoomsData {
  heading: string;
  subheading: string;
  rooms: RoomData[];
}

const defaultRooms: RoomData[] = [
  { name: 'Senator Spa Suite', tags: ['Suite', 'Spa'], features: ['King Bed', 'Jetted Tub'], description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.', href: '/rooms/senator-spa-suite', image: undefined },
  { name: 'Tiffany Suite', tags: ['Suite', 'Bay Window'], features: ['King Bed', 'Bay Window'], description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.', href: '/rooms/tiffany-suite', image: undefined },
  { name: 'Royal Spa Room', tags: ['Queen Bed', 'Spa Tub'], features: ['Queen Bed', 'Spa Tub'], description: 'Top floor crown jewel with king bed, two-person jetted tub, and Italian travertine marble.', href: '/rooms/royal-spa-room', image: undefined },
];

async function getFeaturedRoomsData(): Promise<FeaturedRoomsData | null> {
  return client.fetch(
    `*[_type == "featuredRooms"][0]`,
    {},
    { next: { tags: ['featuredRooms'] } }
  );
}

export const FeaturedRooms: React.FC = async () => {
  const data = await getFeaturedRoomsData();
  const heading = data?.heading ?? 'Featured Rooms';
  const subheading = data?.subheading ?? 'Each suite and room is thoughtfully designed with historic charm and modern comfort.';
  const rooms = data?.rooms?.length ? data.rooms : defaultRooms;

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading font-medium text-text-primary mb-4">{heading}</h2>
          <p className="text-text-md text-text-secondary max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              {...room}
              image={room.image ? urlFor(room.image).width(600).height(400).url() : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};