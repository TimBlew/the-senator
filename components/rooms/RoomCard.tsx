import React from 'react';
import Image from 'next/image';

interface Room {
  id: string;
  name: string;
  badges: string[];
  bedType: string;
  amenities: string[];
  description: string;
  image?: string;
}

interface RoomCardProps {
  room: Room;
  href?: string;
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
  const imageSrc = room.image && room.image.trim() !== '' ? room.image : '/images/room-placeholder.jpg';

  return (
    <div className="bg-white rounded-[16px] overflow-hidden flex flex-col shadow-sm">

      {/* Image - full width, no inset */}
      <div className="relative w-full h-[240px]">
        <Image
          src={imageSrc}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Badges */}
        <div className="flex gap-2 mb-3">
          {room.badges.map((badge) => (
            <span
              key={badge}
              className={`px-3 py-1 text-sm font-medium rounded-full ${getBadgeColor(badge)}`}
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
        <p className="text-lg text-[#6B4E4F] mb-4 flex-grow leading-[28px]">
          {room.description}
        </p>

        {/* Check Availability Button */}
        <button className="w-full py-3 text-md font-normal text-[#6B4E4F] bg-[#FEFDFC] border border-[#D8CCC4] rounded hover:bg-[#FAECEB] hover:text-[#982F31] hover:border-[#982F31] transition-colors">
          Check Availability
        </button>
      </div>
    </div>
  );
};