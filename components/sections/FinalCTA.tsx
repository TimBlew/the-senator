import React from 'react';
import { client } from '@/sanity/lib/client';

interface FinalCtaData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
}

async function getFinalCtaData(): Promise<FinalCtaData | null> {
  return client.fetch(
    `*[_type == "finalCta"][0]`,
    {},
    { next: { tags: ['finalCta'] } }
  );
}

export const FinalCTA: React.FC = async () => {
  const data = await getFinalCtaData();

  const heading = data?.heading ?? 'Ready to stay with us?';
  const subheading = data?.subheading ?? 'Explore our rooms and check availability for your perfect mountain getaway.';
  const ctaText = data?.ctaText ?? 'Check availability';
  const ctaHref = data?.ctaHref ?? '#';

  return (
    <section id="book" className="py-20 bg-bg-subtle">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-h2 font-heading font-medium text-brand-primary mb-4">
          {heading}
        </h2>
        <p className="text-text-lg text-text-secondary mb-8">
          {subheading}
        </p>
        
        <a
          href={ctaHref}
          className="inline-block px-10 py-4 text-md font-medium bg-brand-primary text-white hover:bg-brand-hover transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};