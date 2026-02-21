import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-sm text-text-secondary border border-border-default px-4 py-2 rounded">
              About The Heber Senator
            </span>
          </div>
          <h1 className="text-[64px] leading-[72px] tracking-[-2.56px] font-heading font-medium text-[#592524] mb-6">
            A Home Built on Vision
          </h1>
          <p className="text-[20px] leading-[32px] tracking-[-0.4px] text-text-secondary max-w-[720px] mx-auto">
            Built in 1902 by Joseph R. Murdock— the pioneer behind the Murdock Canal which opened northern Utah to thousands—this 8,500 sqft home was anchored to the Earth to raise a family of eleven with hopes of pursuing community built to last.
          </p>
        </div>
      </section>

      {/* Joseph R. Murdock's Legacy Section */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[48px] leading-[54px] tracking-[-1.92px] font-heading font-medium text-[#592524] mb-6">
                Joseph R. Murdock&apos;s Legacy
              </h2>
              <p className="text-[20px] leading-[32px] tracking-[-0.4px] text-text-secondary">
                Joseph Murdock was far more than a resident of Heber Valley—he was a builder of the community itself. He founded Heber Valley Bank, establishing financial infrastructure for the region. As Mayor of Heber City, serving nearly a decade in the role, he guided the town through formative years. His most enduring contribution was leading the construction of canal systems that brought water to Utah communities, fundamentally transforming agricultural and civic development across the region.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-full h-[402px] bg-[#E8E8E8] rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Home Today Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[48px] leading-[54px] tracking-[-1.92px] font-heading font-medium text-[#592524] mb-6">
                The Home Today
              </h2>
              <p className="text-[20px] leading-[32px] tracking-[-0.4px] text-text-secondary">
                The Joseph Murdock home has been thoughtfully converted into a bed &amp; breakfast, preserving its historic architecture while enhancing its comfort for guests. Many original details remain intact—ornate fireplaces, period fixtures, vintage tubs, and the solid construction that has allowed this 8,500 square foot home to stand for more than a century. Every room tells a story of the era in which it was built.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-full h-[402px] bg-[#E8E8E8] rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-[#F5F8FA]">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[48px] leading-[54px] tracking-[-1.92px] font-heading font-medium text-[#592524] mb-6">
                What to Expect
              </h2>
              <p className="text-[20px] leading-[32px] tracking-[-0.4px] text-text-secondary">
                Staying at the Heber Senator means experiencing genuine hospitality in a historic setting. We provide personal service, cooked-to-order breakfast prepared fresh each morning, beautiful landscaping that invites reflection, and walking access to downtown Heber—all within the walls of a home that once hosted a family and now welcomes guests from around the world. This is not a modern resort; it&apos;s a home with history, character, and warmth.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-full h-[402px] bg-[#E8E8E8] rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part of the Roamstead Collective Section */}
      <section style={{ background: '#EDE8E3', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1232, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 24 }}>
            {/* Logo */}
            <div style={{ flexShrink: 0, width: 80, height: 80 }}>
              <Image
                src="/images/roamstead-logo.svg"
                alt="Roamstead Collective"
                width={80}
                height={80}
              />
            </div>

            {/* Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3
                style={{
                  fontFamily: 'var(--fonts-paragraph-family, "Funnel Sans")',
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: '32px',
                  letterSpacing: '-0.4px',
                  color: '#982F31',
                  margin: 0,
                }}
              >
                Part of the Roamstead Collective
              </h3>
              <p
                style={{
                  fontFamily: 'var(--fonts-paragraph-family, "Funnel Sans")',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '-0.36px',
                  color: '#6D6057',
                  margin: 0,
                }}
              >
                The Heber Senator is part of the Roamstead Collective—a growing collection of thoughtfully designed stays in Heber Valley, each with its own character and story.
              </p>
              <div>
                <a
                  href="https://roamstead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 16px',
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: '24px',
                    letterSpacing: '-0.32px',
                    color: '#982F31',
                    background: '#FEFDFC',
                    border: '1px solid #D8CCC4',
                    borderRadius: 4,
                    textDecoration: 'none',
                  }}
                >
                  Explore Roamstead
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
