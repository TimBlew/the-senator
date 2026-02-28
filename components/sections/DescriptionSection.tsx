import React from 'react';
import { client } from '@/sanity/lib/client';

interface DescriptionData {
  body: string;
}

const defaultBody = 'Built in 1902 by Utah State Senator Joseph Murdock, The Senator is a 9,000-square-foot home on a quiet street in Heber City — three blocks from Main Street, fifteen minutes from Deer Valley, twenty from Park City. Ten individually appointed rooms across three floors, a cooked-to-order breakfast every morning, and the kind of pace that lets you get your work done and still make it outside before the light changes.';

async function getDescriptionData(): Promise<DescriptionData | null> {
  return client.fetch(
    `*[_type == "descriptionSection"][0]`,
    {},
    { next: { tags: ['descriptionSection'] } }
  );
}

export const DescriptionSection: React.FC = async () => {
  const data = await getDescriptionData();
  const body = data?.body ?? defaultBody;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[816px] mx-auto px-6">
        <p className="text-text-xl text-text-secondary">
          {body}
        </p>
      </div>
    </section>
  );
};