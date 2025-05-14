import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 min-h-screen flex items-center pt-20">
      {/* Animated security elements in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="security-grid opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Secure Your Browsing with{' '}
              <span className="text-blue-400">GuardianScan</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              Block malicious scripts, invasive pop-ups, and web threats in real-time with our 
              powerful browser extension. Browse with confidence, knowing GuardianScan is working 
              to protect your online privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all group"
              >
                Download Free
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#how-it-works" 
                className="border border-blue-400 text-blue-100 hover:bg-blue-800/30 py-3 px-8 rounded-lg font-medium text-lg flex items-center justify-center transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <ShieldCheck size={22} className="text-green-400" />
              <p className="text-blue-100">Protecting over 50,000 users worldwide</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-blue-800 px-6 py-4 flex items-center gap-3">
                  <ShieldCheck size={24} className="text-white" />
                  <span className="text-white font-medium">GuardianScan Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Security Status</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Protected</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg flex items-start gap-3">
                      <div className="mt-1 bg-green-100 p-1 rounded-full">
                        <ShieldCheck size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Scripts Monitored</p>
                        <p className="text-xs text-gray-600">42 scripts running safely</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-1 rounded-full">
                        <ShieldCheck size={16} className="text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Threat Detected & Blocked</p>
                        <p className="text-xs text-gray-600">Malicious script from ads.trackingsite.com</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 p-1 rounded-full">
                        <ShieldCheck size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Pop-up Blocker</p>
                        <p className="text-xs text-gray-600">3 unwanted pop-ups blocked today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;