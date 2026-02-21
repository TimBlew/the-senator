'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is included in my stay?',
      answer: 'Every stay includes a cooked-to-order breakfast each morning, complimentary high-speed Wi-Fi, access to common areas and gardens, on-site parking, and warm hospitality. All rooms include private bathrooms, premium bedding, and period furnishings.',
    },
    {
      question: 'Do all rooms have private bathrooms?',
      answer: 'Yes. All guest rooms include private bathrooms. Many feature jetted spa tubs or vintage claw-foot tubs. Please review individual room descriptions for specifics on each bathroom.',
    },
    {
      question: 'Are spa tubs available in every room?',
      answer: 'Not all rooms include spa tubs. Our Spa Suites and Spa Rooms feature two-person jetted tubs, while some rooms have vintage claw-foot tubs or standard showers. Review the room details to find the right fit for your stay.',
    },
    {
      question: 'Do rooms have air conditioning?',
      answer: 'Most rooms feature independent heating and air conditioning. Heber Valley sits at 5,600 feet, so the mountain climate stays comfortable for much of the year. Let us know if climate control is important to your stay and we will help you choose the right room.',
    },
    {
      question: 'Is the house really historic?',
      answer: 'Yes. The home was built in 1902 by Utah State Senator Joseph R. Murdock for his wife Margaret and their eleven children. Many original architectural features have been preserved, including the oak-surround fireplace in the Murdock Room, claw-foot tubs, and period woodwork throughout. This historic character is part of what makes staying here different.',
    },
    {
      question: 'How far is it to the ski resorts?',
      answer: 'Soldier Hollow is about 15 minutes away. Deer Valley is roughly 30 minutes. Park City Mountain is around 35 minutes. Sundance is about 40 minutes. All are accessible by car and offer world-class skiing and snowboarding.',
    },
    {
      question: 'Can I host a special event at the Senator?',
      answer: 'Yes. The Heber Senator hosts meetings, private celebrations, and murder mystery experiences by arrangement. Our common areas can be reserved for qualified groups. Contact us directly to discuss your event and availability.',
    },
    {
      question: 'Is downtown Heber walkable from the Senator?',
      answer: 'Yes. The Heber Senator sits at 118 S 300 W, a short walk from downtown Heber City. Restaurants, galleries, boutiques, and the Heber Valley Railroad are all easily accessible on foot. The town is compact and pleasant to explore.',
    },
    {
      question: 'What should I bring for the weather?',
      answer: 'Mountain weather shifts quickly at this elevation. Winter calls for a warm coat, hat, gloves, and boots. Summer is comfortable with light layers and sunscreen. Spring and fall are best with a jacket and closed-toe shoes. Whatever the season, layers are your friend.',
    },
    {
      question: 'What is the best time of year to visit?',
      answer: 'Honestly, every season has its draw. Winter is skiing and snow and holiday charm. Spring brings wildflowers and thawing trails. Summer opens up the lakes and long days. And fall - the aspens turn gold and the valley feels like it is taking a deep breath. There is not a wrong time to come.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-border-subtle">
      <div className="max-w-[816px] mx-auto px-6">
        <h2 className="text-[48px] leading-[54px] tracking-[-1.92px] font-heading font-medium text-[#592524] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[20px] leading-[32px] tracking-[-0.4px] text-text-secondary mb-12">
          A few things guests commonly ask before booking.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E7DFDB] pb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <h3 className="text-lg leading-[28px] tracking-[-0.36px] font-medium text-[#982F31] group-hover:text-brand-hover transition-colors pr-4">
                  {faq.question}
                </h3>
                <span className="text-[#982F31] text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '−'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="mt-4">
                  <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special callout */}
        <div className="mt-12 p-6 bg-[#FBF8F7] border border-[#E1D7D1] rounded-[12px]">
          <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
            <strong>What is the best time of year to visit?</strong><br/>
            Honestly, every season has its draw. Winter is skiing and snow and holiday charm. Spring brings wildflowers and thawing trails. Summer opens up the lakes and long days. And fall - the aspens turn gold and the valley feels like it is taking a deep breath. There is not a wrong time to come.
          </p>
        </div>
      </div>
    </section>
  );
};