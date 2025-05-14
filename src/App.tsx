import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Detection from './components/Detection';

function App() {
  useEffect(() => {
    document.title = 'GuardianScan - Proteção Avançada para Navegador';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Detection />
        <Testimonials />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;