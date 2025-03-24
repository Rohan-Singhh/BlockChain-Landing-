import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import './Landingpage.css';

const LandingPage = () => {
  const chains = [
    { name: "MANTLE", logo: "https://assets.coingecko.com/coins/images/30980/small/token-logo.png" },
    { name: "OPTIMISM", logo: "https://assets.coingecko.com/coins/images/25244/small/Optimism.png" },
    { name: "MANTA NETWORK", logo: "https://assets.coingecko.com/coins/images/30980/small/token-logo.png" },
    { name: "PARTISIA BLOCKCHAIN", logo: "https://assets.coingecko.com/coins/images/30980/small/token-logo.png" },
    { name: "POLYGON ZKEVM", logo: "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png" },
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <Database className="h-8 w-8 text-[#CDFF00]" />
            <span>Unmarshal</span>
          </div>

          <div className="nav-pill">
            <a href="#">Products</a>
            <a href="#">Unmarshal 2.0</a>
            <a href="#">SMARSH</a>
            <a href="#">Roadmap</a>
            <a href="#">Company</a>
            <a href="#">Explorer</a>
          </div>

          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="background-elements">
          <div className="chain-icon-wrapper">
            <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="chain" className="chain-bg-icon icon1" />
            <img src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png" alt="chain" className="chain-bg-icon icon2" />
            <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="chain" className="chain-bg-icon icon3" />
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="chain" className="chain-bg-icon icon4" />
          </div>
        </div>

        <div className="hero-content">
          <div className="ai-badge">
            ✦ POWERED BY AI ✦
          </div>

          <h1 className="hero-title">
            Most Reliable Blockchain
            <br />
            Data Infrastructure
          </h1>

          <p className="hero-description">
            The easiest way to query Blockchain data from 35+ chains including
            Ethereum, BSC, Polygon™ to "AI Powered Blockchain Data.
          </p>

          <div className="cta-buttons">
            <button className="parser-btn">PARSER</button>
            <button className="get-started-btn">
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Supported Chains Section */}
        <div className="supported-chains">
          <h3 className="chains-title">SUPPORTED CHAINS</h3>
          <div className="chains-grid">
            {chains.map((chain, index) => (
              <div key={index} className="chain-item">
                <img src={chain.logo} alt={chain.name} />
                <span>{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
