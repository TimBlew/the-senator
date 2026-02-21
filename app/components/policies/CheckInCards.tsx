import React from 'react';
import Image from 'next/image';

export const CheckInCards: React.FC = () => {
  const checkInInfo = [
    {
      icon: '/images/key-icon.png',
      label: 'CHECK-IN',
      time: 'After 3:00 PM',
    },
    {
      icon: '/images/checkout-icon.png',
      label: 'CHECK-OUT',
      time: 'By 11:00 AM',
    },
    {
      icon: '/images/clock-icon.png',
      label: 'FRONT DESK',
      time: '8:30 AM – 6:00 PM',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {checkInInfo.map((item, index) => (
            <div
              key={index}
              className="bg-[#FBF8F7] border border-[#E1D7D1] rounded-[12px] p-4 flex flex-col items-center text-center"
            >
              <div className="mb-3 w-12 h-12 flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.label} 
                  width={48} 
                  height={48}
                  className="w-12 h-12 object-contain"
                  priority
                />
              </div>
              <div className="text-xs tracking-wider text-text-secondary mb-2 uppercase">
                {item.label}
              </div>
              <div className="text-[20px] leading-[32px] font-medium text-[#592524]">
                {item.time}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-sm leading-[18px] tracking-[-0.28px] text-text-secondary text-center mt-6">
          Early check-in and late check-out may be available upon request. If you expect to arrive outside front desk hours, please contact us in advance so we can make arrangements.
        </p>
      </div>
    </section>
  );
};