import React from 'react';
import { client } from '@/sanity/lib/client';

interface Stat {
  value: string;
  label: string;
}

interface StatsData {
  stats: Stat[];
}

const defaultStats = [
  { value: '1902', label: 'Established' },
  { value: '10', label: 'Unique Rooms & Suites' },
  { value: '4', label: 'Nearby Ski Resorts' },
  { value: '3', label: 'Lakes within reach' },
];

async function getStatsData(): Promise<StatsData | null> {
  return client.fetch(
    `*[_type == "statsSection"][0]`,
    {},
    { next: { tags: ['statsSection'] } }
  );
}

export const StatsSection: React.FC = async () => {
  const data = await getStatsData();
  const stats = data?.stats?.length ? data.stats : defaultStats;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-h3 font-heading font-medium text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-md text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};