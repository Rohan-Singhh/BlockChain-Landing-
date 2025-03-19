import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Info4.css';  // Import the CSS file

const Info4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Array of images with their sources and alt texts
  const images = [
    { src: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", alt: "Binance" },
    { src: "https://cryptologos.cc/logos/ethereum-eth-logo.png", alt: "Ethereum" },
    { src: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", alt: "BUSD" },
    { src: "https://cryptologos.cc/logos/polygon-matic-logo.png", alt: "Polygon" },
    { src: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png", alt: "Polkadot" },
    { src: "https://cryptologos.cc/logos/harmony-one-logo.png", alt: "Harmony" },
    { src: "https://cryptologos.cc/logos/solana-sol-logo.png", alt: "Solana" },
    { src: "https://cryptologos.cc/logos/iota-miota-logo.png", alt: "IOTA" },
    { src: "https://cryptologos.cc/logos/tron-trx-logo.png", alt: "Tron" },
    { src: "https://cryptologos.cc/logos/0x-zrx-logo.png", alt: "0x" },
    { src: "https://cryptologos.cc/logos/gnosis-gno-gno-logo.png", alt: "Gnosis" },
    { src: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", alt: "BUSD" },
    { src: "https://cryptologos.cc/logos/cardano-ada-logo.png", alt: "Cardano" },
    { src: "https://cryptologos.cc/logos/avalanche-avax-logo.png", alt: "Avalanche" },
    { src: "https://cryptologos.cc/logos/algorand-algo-logo.png", alt: "Algorand" },
    { src: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png", alt: "Polkadot" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it’s visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <p
          className={`text-sm uppercase tracking-wider mb-6 text-gray-400 fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0s' }}
        >
          SUPPORTED BLOCKCHAINS
        </p>
        <h1
          className={`text-5xl md:text-6xl font-normal mb-6 leading-tight fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Hear the heartbeat of every chain
        </h1>
        <p
          className={`text-gray-400 text-lg mb-10 max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          The easiest way to query Blockchain data from 35+ chains including
          Ethereum, BSC, Polygon™ to *AI Powered Blockchain Data.
        </p>
        <button
          className={`bg-[#DFFE00] text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-[#CCEB00] transition-colors fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.6s' }}
        >
          EXPLORE ALL
          <ArrowRight size={20} />
        </button>
        <div
          className={`mt-20 grid grid-cols-4 md:grid-cols-8 gap-8 max-w-4xl mx-auto`}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-12 h-12 fade-in ${isVisible ? 'visible' : ''} ${
                index % 2 === 0 ? 'from-left' : 'from-right'
              }`}
              style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info4;