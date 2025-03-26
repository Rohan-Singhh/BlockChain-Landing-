import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Info4.css';  // Import the CSS file

const Info4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  // Static array of blockchain logos
  const logos = [
    { imageUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", name: "Binance" },
    { imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png", name: "Ethereum" },
    { imageUrl: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", name: "BUSD" },
    { imageUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png", name: "Polygon" },
    { imageUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png", name: "Polkadot" },
    { imageUrl: "https://cryptologos.cc/logos/harmony-one-logo.png", name: "Harmony" },
    { imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.png", name: "Solana" },
    { imageUrl: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", name: "BUSD" },
    { imageUrl: "https://cryptologos.cc/logos/tron-trx-logo.png", name: "Tron" },
    { imageUrl: "https://cryptologos.cc/logos/0x-zrx-logo.png", name: "0x" },
    { imageUrl: "https://cryptologos.cc/logos/gnosis-gno-gno-logo.png", name: "Gnosis" },
    { imageUrl: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", name: "BUSD" },
    { imageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png", name: "Cardano" },
    { imageUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png", name: "Avalanche" },
    { imageUrl: "https://cryptologos.cc/logos/algorand-algo-logo.png", name: "Algorand" },
    { imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png", name: "Ethereum" },
  ];

  useEffect(() => {
    // Set visible on initial load with a slight delay
    setTimeout(() => setIsVisible(true), 100);

    // Set up intersection observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#111111] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1E1E1E] rounded-full px-4 py-1 mb-6">
            <span className="text-sm uppercase text-gray-400">Supported Blockchains</span>
          </div>
          <h2 className="text-6xl font-normal text-white mb-6">
            Hear the heartbeat of every chain
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            The easiest way to query Blockchain data from 35+ chains including
            <br />
            Ethereum, BSC, Polygon* to *AI Powered Blockchain Data.
          </p>
          <button className="bg-[#DFFE00] hover:bg-[#CCEB00] text-black px-6 py-3 rounded-full inline-flex items-center gap-2">
            EXPLORE ALL
            <span>→</span>
          </button>
        </div>

        <div className={`logo-grid ${isVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={`logo-container ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={logo.imageUrl}
                alt={logo.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info4;