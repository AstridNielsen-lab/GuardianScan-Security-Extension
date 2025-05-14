import React from 'react';
import { Chrome, Send, Shield } from 'lucide-react';

const browsers = [
  {
    name: 'Google Chrome',
    icon: <Chrome size={32} className="text-blue-600" />,
    button: 'Download for Chrome',
    link: '#'
  },
  {
    name: 'Mozilla Firefox',
    icon: <Send size={32} className="text-orange-500" />,
    button: 'Download for Firefox',
    link: '#'
  },
  {
    name: 'Microsoft Edge',
    icon: <Send size={32} className="text-blue-500" />,
    button: 'Download for Edge',
    link: '#'
  }
];

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download GuardianScan Today
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Available for all major browsers. Installation takes less than a minute, and you'll 
            be protected immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {browsers.map((browser, index) => (
            <div key={index} className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center border border-blue-700/50 hover:border-blue-500/50 transition-all">
              <div className="mb-4">{browser.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{browser.name}</h3>
              <p className="text-blue-200 mb-6 text-sm">
                Compatible with the latest version and up to 3 previous versions.
              </p>
              <a 
                href={browser.link} 
                className="mt-auto bg-white text-blue-900 hover:bg-blue-100 py-2 px-5 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Shield size={16} />
                {browser.button}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-blue-800/30 border border-blue-700/50 rounded-xl max-w-3xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Need GuardianScan for your team?</h3>
            <p className="text-blue-100">Get volume licensing and centralized management for your organization.</p>
          </div>
          <a 
            href="#" 
            className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
          >
            Business Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;