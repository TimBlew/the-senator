import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface HeroData {
  heading: string;
  subheading: string;
  backgroundImage: any;
  primaryCtaText: string;
  secondaryCtaText: string;
}

async function getHeroData(): Promise<HeroData | null> {
  return client.fetch(
    `*[_type == "heroSection"][0]`,
    {},
    { next: { tags: ['heroSection'] } }
  );
}

export const HeroSection: React.FC = async () => {
  const data = await getHeroData();

  const heading = data?.heading ?? 'The Heber Senator';
  const subheading = data?.subheading ?? 'A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it.';
  const primaryCtaText = data?.primaryCtaText ?? 'View Our Rooms';
  const secondaryCtaText = data?.secondaryCtaText ?? 'Book your stay';
  const imageSrc = data?.backgroundImage
    ? urlFor(data.backgroundImage).width(1920).height(700).url()
    : '/images/senator-main.jpg';

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <Image
        src={imageSrc}
        alt="The Heber Senator"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-hero font-heading font-medium text-text-light mb-6">
          {heading}
        </h1>
        <p className="text-text-lg text-text-light/90 max-w-2xl mb-8">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#rooms" className="px-8 py-3 text-sm font-medium bg-white text-brand-primary hover:bg-gray-100 transition-colors">
            {primaryCtaText}
          </a>
          <a href="#book" className="px-8 py-3 text-sm font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors">
            {secondaryCtaText}
          </a>
        </div>
      </div>
    </section>
  );
};