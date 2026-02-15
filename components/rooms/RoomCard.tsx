import React from 'react';
import Image from 'next/image';

interface Room {
  id: string;
  name: string;
  badges: string[];
  bedType: string;
  amenities: string[];
  description: string;
  image: string;
}

interface RoomCardProps {
  room: Room;
}

const getBadgeColor = (badge: string) => {
  const colors: { [key: string]: string } = {
    'Suite': 'bg-[#FAECEB] text-[#982F31]',
    'Spa': 'bg-[#FAECEB] text-[#982F31]',
    'Standard': 'bg-[#FAECEB] text-[#982F31]',
    'ADA': 'bg-[#FAECEB] text-[#982F31]',
  };
  return colors[badge] || 'bg-[#FAECEB] text-[#982F31]';
};

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-[#F4EFEC] border border-[#E1D7D1] rounded-[16px] overflow-hidden flex flex-col">
      {/* Image Placeholder */}
      <div className="w-full h-[240px] bg-[#E8E2DD] flex items-center justify-center">
        <div className="text-gray-400">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="50" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="20" y="25" width="50" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="35" r="4" fill="currentColor"/>
            <path d="M20 50L30 40L40 50L50 35L65 50V60H20V50Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Badges */}
        <div className="flex gap-2 mb-3">
          {room.badges.map((badge) => (
            <span
              key={badge}
              className={`px-3 py-1 text-sm font-medium rounded ${getBadgeColor(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Room Name */}
        <h3 className="text-h4 font-heading font-medium text-[#592524] mb-3">
          {room.name}
        </h3>

        {/* Bed Type & Amenities */}
        <div className="flex gap-3 mb-3">
          <span className="text-md text-[#C88654]">{room.bedType}</span>
          {room.amenities.map((amenity, index) => (
            <span key={index} className="text-md text-[#C88654]">
              {amenity}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-[#982F31] mb-4 flex-grow leading-[28px]">
          {room.description}
        </p>

        {/* Check Availability Button */}
        <button className="w-full py-3 text-md font-normal text-[#982F31] bg-[#FEFDFC] border border-[#D8CCC4] rounded hover:bg-[#982F31] hover:text-white hover:border-[#982F31] transition-colors">
          Check Availability
        </button>
      </div>
    </div>
  );
};