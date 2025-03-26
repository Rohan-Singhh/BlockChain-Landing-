import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import './Landingpage.css';

const LandingPage = () => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-[#CDFF00]" />
              <span className="ml-2 text-xl font-semibold">Unmarshal</span>
            </div>
            <div className="hidden md:flex items-center bg-[#1a1a1a] rounded-full px-6 py-2">
              <a href="#" className="text-gray-300 hover:text-white px-4">Products</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Unmarshal 2.0</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">$MARSH</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Roadmap</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Company</a>
              <a href="#" className="text-gray-300 hover:text-white px-4">Explorer</a>
            </div>
            <button className="border border-gray-600 text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 text-center">
        <div className="inline-flex items-center bg-[#1a1a1a] rounded-full px-6 py-2 mb-8 animate-badge relative">
          <div className="glow-line left"></div>
          <span className="text-[#CDFF00] mr-2 glow-star">✦</span>
          <span className="text-sm tracking-wide text-gray-200 glow-text">POWERED BY AI</span>
          <span className="text-[#CDFF00] ml-2 glow-star">✦</span>
          <div className="glow-line right"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-light mb-6 animate-heading tracking-wide">
          Most Reliable Blockchain
          <br />
          <span className="font-light">Data Infrastructure</span>
        </h1>

        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto animate-paragraph">
          The easiest way to query Blockchain data from 35+ chains including
          Ethereum, BSC, Polygon™ to "AI Powered Blockchain Data.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-buttons">
          <button className="bg-[#CDFF00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#BDEF00] transition-colors">
            PARSER
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
            GET STARTED
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Supported Chains Section */}
        <div className="mt-24 relative">
          <div className="supported-chains-line">
            <span className="text-gray-500 text-sm tracking-wider bg-black px-4">
              SUPPORTED CHAINS
            </span>
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap mt-12">
            {chains.map((chain, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-chain"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="w-8 h-8 opacity-70"
                />
                <span
                  className="text-gray-400"
                  style={{
                    fontSize: '14px',
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
