import React from 'react';
import { Shield, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Install the Extension',
    description: 'Download GuardianScan from your browser\'s extension store and add it to your browser.',
    icon: <Shield className="text-blue-600" size={24} />
  },
  {
    number: 2,
    title: 'Automatic Protection',
    description: 'Once installed, GuardianScan immediately begins monitoring all web activity for potential threats.',
    icon: <Shield className="text-blue-600" size={24} />
  },
  {
    number: 3,
    title: 'Threat Detection',
    description: 'When suspicious scripts or activities are detected, GuardianScan analyzes them for malicious intent.',
    icon: <AlertCircle className="text-amber-500" size={24} />
  },
  {
    number: 4,
    title: 'Automatic Blocking',
    description: 'Confirmed threats are instantly blocked, protecting your data and device from harm.',
    icon: <CheckCircle className="text-green-600" size={24} />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How GuardianScan Protects You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced security extension works seamlessly in the background to detect and neutralize threats.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Center dot for desktop */}
                  <div className="hidden md:block absolute left-1/2 top-7 w-8 h-8 bg-white border-4 border-blue-500 rounded-full transform -translate-x-1/2"></div>
                  
                  {/* Content for each side */}
                  <div className="md:w-1/2 p-6 md:pr-12 md:pl-0 md:text-right">
                    <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:pr-0'}>
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for desktop alternate layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
                
                {/* Arrow for flow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6 md:hidden">
                    <ArrowRight className="text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Demo visual */}
          <div className="mt-16 bg-white rounded-xl shadow-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Shield className="text-blue-600 mr-2" size={20} />
              Live Threat Protection Demo
            </h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="mb-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <AlertCircle size={16} className="text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-800">Malicious Script Detected</span>
                  </div>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">High Risk</span>
                </div>
                <div className="text-xs font-mono bg-gray-200 text-gray-800 p-2 rounded overflow-x-auto">
                  malicious-tracker.com/inject.js - Cryptocurrency mining script detected
                </div>
                <div className="absolute right-0 top-0 transform translate-x-2 -translate-y-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Blocked
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <AlertCircle size={16} className="text-amber-500 mr-2" />
                    <span className="text-sm font-medium text-gray-800">Suspicious Activity</span>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Medium Risk</span>
                </div>
                <div className="text-xs font-mono bg-gray-200 text-gray-800 p-2 rounded overflow-x-auto">
                  ads.example-network.com - Attempting to access browser history
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-sm font-medium text-gray-800">Safe Resource</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Safe</span>
                </div>
                <div className="text-xs font-mono bg-gray-200 text-gray-800 p-2 rounded overflow-x-auto">
                  cdn.example.com/jquery.min.js - Verified safe script
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;