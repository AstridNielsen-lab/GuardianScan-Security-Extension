import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="animate-bounce mb-6">
        <Shield size={64} className="text-blue-400" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">GuardianScan</h1>
      <div className="text-center">
        <p className="text-blue-200 mb-2">Desenvolvido por</p>
        <p className="text-white font-medium">Julio Campos Machado</p>
        <a 
          href="https://likelook.wixsite.com/solutions" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Like Look Solutions
        </a>
        <p className="text-blue-200 mt-2">
          <a 
            href="https://wa.me/11970603441" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-300 transition-colors"
          >
            WhatsApp: (11) 97060-3441
          </a>
        </p>
      </div>
    </div>
  );
};

export default SplashScreen