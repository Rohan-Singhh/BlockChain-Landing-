import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import './Landingpage.css';

const LandingPage = () => {
  const chains = [
    { name: "MANTLE", width: '100px', bold: true },
    { name: "OPTIMISM", width: '130px', bold: true },
    { name: "Manta Network", width: '83px', bold: false },
    { name: "Partsia Blockchain", width: '97px', bold: false },
    { name: "Polygon zkEVM", width: '116px', bold: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 animate-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-[#CDFF00]" />
              <span className="ml-2 text-xl font-semibold">Unmarshal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white">Products</a>
              <a href="#" className="text-gray-300 hover:text-white">Explorer</a>
              <a href="#" className="text-gray-300 hover:text-white">Company</a>
              <button className="bg-transparent border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-bg-element"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full blur-xl animate-bg-element"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <div className="inline-flex items-center bg-gray-800/50 rounded-full px-4 py-1 mb-8 animate-badge">
            <span className="text-[#CDFF00] mr-2">★</span>
            <span className="text-sm">POWERED BY AI</span>
            <span className="text-[#CDFF00] ml-2">★</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-heading">
            Most Reliable Blockchain
            <br />
            Data Infrastructure
          </h1>

          <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto animate-paragraph">
            The easiest way to query Blockchain data from 35+ chains including
            Ethereum, BSC, Polygon™ to "AI Powered Blockchain Data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-buttons">
            <button className="bg-[#CDFF00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#BDEF00] transition-colors">
              PARSER
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center hover:bg-gray-100 transition-colors">
              GET STARTED
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

       {/* Supported Chains Section */}
<h3 className="text-center text-gray-500 mb-12 tracking-wider animate-chains-heading">SUPPORTED CHAINS</h3>
<div className="flex justify-center items-center gap-12 flex-wrap">
  {chains.map((chain, index) => (
    <div
      key={index}
      className="flex items-center gap-2 animate-chain"
      style={{ animationDelay: `${1.2 + index * 0.1}s` }}
    >
      <img
        src="https://s2.loli.net/2023/06/21/Cze29TKLGsAtdng.png"
        alt={chain.name}
        className="w-10 h-10" // 40px size
      />
      <span
        className="text-gray-400"
        style={{
          fontSize: '14px',
          fontWeight: chain.bold ? 'bold' : 'normal',
        }}
      >
        {chain.name}
      </span>
    </div>
  ))}
</div>

      </main>
    </div>
  );
};

export default LandingPage;
