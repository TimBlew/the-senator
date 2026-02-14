import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark text-text-light py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="/images/senator-icon-stacked.svg" 
              alt="The Heber Senator" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-text-light/80 mb-4">
              A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it.
            </p>
            <p className="text-xs text-text-light/60">
              Part of the Roamstead Collective
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-text-light/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="/rooms" className="text-sm text-text-light/80 hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="/our-story" className="text-sm text-text-light/80 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/location" className="text-sm text-text-light/80 hover:text-white transition-colors">Location & Activities</a></li>
            </ul>
          </div>

          {/* Policies (placeholder) */}
          <div>
            <h4 className="text-md font-medium mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="/policies#cancellation" className="text-sm text-text-light/80 hover:text-white transition-colors">Cancellation</a></li>
              <li><a href="/policies#check-in" className="text-sm text-text-light/80 hover:text-white transition-colors">Check-in/out</a></li>
              <li><a href="/policies#pets" className="text-sm text-text-light/80 hover:text-white transition-colors">Pet Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-medium mb-4">Contact</h4>
            <address className="not-italic space-y-2">
              <p className="text-sm text-text-light/80">
                118 S 300 W<br />
                Heber City, UT 84032
              </p>
              <p className="text-sm text-text-light/80">
                <a href="tel:4357772262" className="hover:text-white transition-colors">
                  (435) 777-2262
                </a>
              </p>
              <p className="text-sm text-text-light/80">
                Front desk: 8:30am-6pm
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-xs text-text-light/60">
            © 2026 The Heber Senator Bed & Breakfast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};