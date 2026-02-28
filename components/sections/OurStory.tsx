import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface OurStoryData {
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  images?: any[];
}

async function getOurStoryData(): Promise<OurStoryData | null> {
  return client.fetch(
    `*[_type == "ourStory"][0]`,
    {},
    { next: { tags: ['ourStory'] } }
  );
}

export const OurStory: React.FC = async () => {
  const data = await getOurStoryData();

  const heading = data?.heading ?? 'Our Story';
  const body = data?.body ?? 'Built in 1902 by Utah State Senator Joseph R. Murdock for his wife Margaret and eleven children, the Heber Senator preserves the character and warmth of its historic origins.';
  const ctaText = data?.ctaText ?? 'Learn about our story';
  const ctaHref = data?.ctaHref ?? '/our-story';
  const images = data?.images ?? [];

  return (
    <section className="py-16 bg-bg-subtle">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-h2 font-heading font-medium text-brand-primary text-center mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 relative flex items-center justify-center">
              {images[i] ? (
                <Image
                  src={urlFor(images[i]).width(600).height(450).url()}
                  alt={`Our story image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-gray-400 text-4xl">📷</div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-md text-text-primary leading-relaxed mb-6">
            {body}
          </p>
          <a
            href={ctaHref}
            className="inline-block px-6 py-2 text-sm font-medium bg-white text-brand-primary border border-brand-primary hover:bg-brand-subtle transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};