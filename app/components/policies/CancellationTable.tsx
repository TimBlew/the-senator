import React from 'react';

export const CancellationTable: React.FC = () => {
  const policyRows = [
    { timeframe: '7+ days before arrival', policy: 'Full refund' },
    { timeframe: 'Within 7 days of arrival', policy: "First night's stay charged" },
    { timeframe: 'Within 3 days of arrival', policy: 'Full stay charged' },
  ];

  return (
    <div className="border-t border-[#E7DFDB]">
      {policyRows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-[10px] py-4 border-b border-[#E7DFDB]"
        >
          <div className="text-md leading-[24px] tracking-[-0.32px] font-medium text-[#982F31]">
            {row.timeframe}
          </div>
          <div className="text-md leading-[24px] tracking-[-0.32px] font-normal text-[#982F31]">
            {row.policy}
          </div>
        </div>
      ))}
    </div>
  );
};