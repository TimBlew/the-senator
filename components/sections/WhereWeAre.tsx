import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Highlight {
  title: string;
  description: string;
}

interface WhereWeAreData {
  heading: string;
  subheading: string;
  mapImage?: any;
  highlights: Highlight[];
}

const defaultHighlights: Highlight[] = [
  { title: 'Ski resorts', description: 'Deer Valley, Park City Mountain, Sundance, Soldier Hollow' },
  { title: 'Lakes', description: 'Jordanelle, Strawberry Reservoir, Deer Creek Reservoir' },
  { title: 'Experience', description: 'Heber Valley Railroad, Local Culture & Dining' },
];

async function getWhereWeAreData(): Promise<WhereWeAreData | null> {
  return client.fetch(
    `*[_type == "whereWeAre"][0]`,
    {},
    { next: { tags: ['whereWeAre'] } }
  );
}

export const WhereWeAre: React.FC = async () => {
  const data = await getWhereWeAreData();

  const heading = data?.heading ?? 'Where We Are';
  const subheading = data?.subheading ?? 'Nestled in the heart of Heber Valley, surrounded by four world-class ski resorts and the natural beauty of Utah mountains.';
  const highlights = data?.highlights?.length ? data.highlights : defaultHighlights;
  const mapSrc = data?.mapImage ? urlFor(data.mapImage).width(816).height(400).url() : '/images/heber-map.jpg';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-h2 font-heading font-medium text-brand-primary text-center mb-4">
          {heading}
        </h2>
        <p className="text-text-md text-text-secondary text-center max-w-2xl mx-auto mb-12">
          {subheading}
        </p>

        <div className="w-full max-w-[816px] h-[400px] mx-auto mb-12 relative overflow-hidden rounded-lg">
          <Image
            src={mapSrc}
            alt="Heber Valley location map"
            fill
            className="object-cover"
          />
        </div>

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