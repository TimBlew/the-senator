import React from 'react';
import { CheckInCards } from '../components/policies/CheckInCards';
import { CancellationTable } from '../components/policies/CancellationTable';
import { FAQSection } from '../components/policies/FAQSection';

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-sm text-text-secondary border border-border-default px-4 py-2 rounded">
              Plan Your Stay
            </span>
          </div>
          
          <h1 className="text-[64px] leading-[72px] tracking-[-2.56px] font-heading font-medium text-[#592524] mb-4">
            Policies & Information
          </h1>
          
          <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary max-w-[720px] mx-auto">
            We want your time here to feel effortless. A few things worth knowing before you arrive.
          </p>
        </div>
      </section>

      {/* Check-in Cards */}
      <CheckInCards />

      {/* Policies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[816px] mx-auto px-6">
          <h2 className="text-[48px] leading-[54px] tracking-[-1.92px] font-heading font-medium text-[#592524] mb-12">
            Policies
          </h2>

          {/* Cancellation Policy */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Cancellation Policy
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary mb-6">
              We understand plans change. Our cancellation windows are structured to be fair for both guests and the property.
            </p>
            <CancellationTable />
          </div>

          {/* Smoking Policy */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Smoking Policy
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary mb-4">
              The Heber Senator is a <strong>100% smoke-free property</strong>. Smoking and vaping are not permitted inside the house or within 25 feet of any entrance, exit, open window, or air intake.
            </p>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              A minimum $300 cleaning fee will be assessed for violations. We appreciate your help in keeping the Senator's historic rooms fresh for every guest.
            </p>
          </div>

          {/* Pet Policy */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Pet Policy
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              Pets are not permitted at the Heber Senator Bed & Breakfast. Service animals, as defined by the ADA, are welcome. Please inform us if you are traveling with a service animal so we can ensure your comfort.
            </p>
          </div>

          {/* Children & Guests */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Children & Guests
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              Children are welcome at the Senator. However, the property is designed primarily for adult guests seeking a quiet, relaxing experience. Please note that the historic nature of the home includes stairs, antiques, and period features that may not be suitable for unsupervised young children.
            </p>
          </div>

          {/* Accessibility */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Accessibility
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary mb-4">
              The <strong>Murdock Room</strong> is located on the first floor and is designed to accommodate guests with disabilities. It features accessible bathroom facilities, a tall ceiling, and the original oak-surround fireplace.
            </p>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary mb-4">
              This room is prioritized for ADA use but may be booked by other guests if it has not been reserved within 72 hours of arrival. The Murdock Room can also adjoin with the Royal Spa Room when both are booked together.
            </p>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              Please contact us with any accessibility needs so we can prepare for your arrival.
            </p>
          </div>

          {/* Parking */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Parking
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              Complimentary on-site parking is available for registered guests. One vehicle per room is recommended unless prior arrangements are made. Street parking in downtown Heber is also available nearby.
            </p>
          </div>

          {/* Breakfast */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Breakfast
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              A full cooked-to-order breakfast is included with every stay, served each morning in the dining area. Please notify us in advance of any food allergies or dietary restrictions so we can prepare accordingly.
            </p>
          </div>

          {/* Quiet Hours */}
          <div className="mb-12">
            <h3 className="text-[36px] leading-[44px] tracking-[-1.44px] font-heading font-medium text-[#592524] mb-4">
              Quiet Hours
            </h3>
            <p className="text-lg leading-[28px] tracking-[-0.36px] text-text-secondary">
              To preserve the peaceful atmosphere of the Senator, quiet hours are observed during the evening and overnight. We kindly ask all guests to be respectful of others staying in the home. The walls have stories, but they also carry sound.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}