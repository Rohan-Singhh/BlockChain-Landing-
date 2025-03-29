import React, { useState } from 'react';
import { ArrowRight, Database, Menu, X } from 'lucide-react';
import './Landingpage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const chains = [
    { name: "MANTLE", logo: "https://cryptologos.cc/logos/mantle-mnt-logo.png", bold: true },
    { name: "OPTIMISM", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png", bold: true },
    { name: "Manta Network", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png", bold: false },
    { name: "Partisia Blockchain", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png", bold: false },
    { name: "Polygon zkEVM", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png", bold: false },
  ];

  const backgroundLogos = [
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png",
    "https://cryptologos.cc/logos/polygon-matic-logo.png"
  ];

  return (
    <div className="bg-black text-white relative">
      {/* Background Logos */}
      <div className="background-logos">
        {backgroundLogos.map((logo, index) => (
          <img 
            key={index} 
            src={logo} 
            alt="blockchain" 
            className={`floating-logo logo-${index}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="border-none animate-nav relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <Database className="h-5 w-5 sm:h-8 sm:w-8 text-[#CDFF00]" />
              <span className="ml-2 text-base sm:text-xl font-semibold">Unmarshal</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-[#1a1a1a] rounded-full px-6 py-2">
              <a href="#" className="text-gray-300 hover:text-white px-4">Products</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">$MARSH</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Roadmap</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Company</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Explorer</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Sign In Button */}
            <button className="hidden md:block border border-gray-600 text-white rounded-full px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-base hover:bg-white hover:text-black transition-colors">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Blurred Background Overlay */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          />
          
          {/* Menu Content */}
          <div className={`relative h-full w-full max-w-sm bg-black/90 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <div className="flex items-center">
                  <Database className="h-6 w-6 text-[#CDFF00]" />
                  <span className="ml-2 text-xl font-semibold">Unmarshal</span>
                </div>
                <button 
                  onClick={toggleMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col p-4 space-y-4">
                <a href="#" className="text-gray-300 hover:text-white py-3 text-lg transition-colors">Products</a>
                <a href="#" className="text-gray-300 hover:text-white py-3 text-lg transition-colors">$MARSH</a>
                <a href="#" className="text-gray-300 hover:text-white py-3 text-lg transition-colors">Roadmap</a>
                <a href="#" className="text-gray-300 hover:text-white py-3 text-lg transition-colors">Company</a>
                <a href="#" className="text-gray-300 hover:text-white py-3 text-lg transition-colors">Explorer</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 sm:pt-20 pb-6 sm:pb-8 text-center main-content">
        <div className="inline-flex items-center bg-[#1a1a1a] rounded-full px-3 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-8 animate-badge relative">
          <div className="glow-line left"></div>
          <span className="text-[#CDFF00] mr-1.5 sm:mr-2 glow-star">✦</span>
          <span className="text-[10px] sm:text-sm tracking-wide text-gray-200 glow-text">POWERED BY AI</span>
          <span className="text-[#CDFF00] ml-1.5 sm:ml-2 glow-star">✦</span>
          <div className="glow-line right"></div>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-light mb-3 sm:mb-6 animate-heading tracking-wide">
          Most Reliable Blockchain
          <br />
          <span className="font-light">Data Infrastructure</span>
        </h1>

        <p className="text-gray-500 text-sm sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto animate-paragraph px-3 sm:px-4">
          The easiest way to query Blockchain data from 35+ chains including
          Ethereum, BSC, Polygon™ to "AI Powered Blockchain Data.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 animate-buttons px-3 sm:px-4">
          <button className="w-full sm:w-auto bg-[#CDFF00] text-black px-3 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-[#BDEF00] transition-colors text-xs sm:text-base max-w-[160px] sm:max-w-none flex items-center justify-center">
            PARSER
          </button>
          <button className="w-full sm:w-auto bg-white text-black px-3 sm:px-8 py-2 sm:py-3 rounded-full font-medium flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-gray-100 transition-colors text-xs sm:text-base max-w-[160px] sm:max-w-none">
            GET STARTED
            <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Supported Chains Section */}
        <div className="mt-12 sm:mt-24 relative">
          <div className="supported-chains-line">
            <span className="text-gray-500 text-[10px] sm:text-sm tracking-wider bg-black px-3 sm:px-4">
              SUPPORTED CHAINS
            </span>
          </div>
          <div className="flex justify-center items-center gap-4 sm:gap-12 flex-wrap mt-6 sm:mt-12 px-3 sm:px-4">
            {chains.map((chain, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 sm:gap-3 animate-chain"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="w-5 h-5 sm:w-8 sm:h-8 opacity-70"
                />
                <span
                  className="text-gray-400 text-[10px] sm:text-sm"
                  style={{
                    fontWeight: chain.bold ? '500' : '400',
                  }}
                >
                  {chain.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
