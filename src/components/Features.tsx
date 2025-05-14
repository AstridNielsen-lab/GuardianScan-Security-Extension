import React from 'react';
import { 
  ShieldAlert, 
  BarChart4, 
  Eye, 
  ShieldOff, 
  FileWarning, 
  GaugeCircle
} from 'lucide-react';

const featureItems = [
  {
    icon: <GaugeCircle size={24} className="text-blue-600" />,
    title: 'Real-Time Scanning',
    description: 'Continuously monitors all requests, scripts and iframes loaded on each webpage for suspicious activity.'
  },
  {
    icon: <Eye size={24} className="text-blue-600" />,
    title: 'Visible Control Panel',
    description: 'Interactive dashboard showing scripts in execution with risk assessment and manual control options.'
  },
  {
    icon: <ShieldOff size={24} className="text-blue-600" />,
    title: 'Automatic Blocking',
    description: 'Instantly blocks malicious pop-ups, harmful ads, and suspicious iframes from unknown domains.'
  },
  {
    icon: <FileWarning size={24} className="text-blue-600" />,
    title: 'Detailed Reporting',
    description: 'Comprehensive logs of detected threats that can be exported for further analysis.'
  },
  {
    icon: <BarChart4 size={24} className="text-blue-600" />,
    title: 'Performance Optimization',
    description: 'Blocks resource-intensive scripts that slow down your browsing experience.'
  },
  {
    icon: <ShieldAlert size={24} className="text-blue-600" />,
    title: 'Data Protection',
    description: 'Prevents form hijacking attempts and protects your sensitive information from theft.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Protection Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GuardianScan comes equipped with powerful features designed to keep your browsing
            secure and private at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;