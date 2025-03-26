import React from 'react';
import { ArrowUpRight, RotateCw, Menu, Plus } from 'lucide-react';
import './Info3.css';

function Info3() {
  return (
    <div className="info3-wrapper">
      <div className="info3-container">
        {/* Top Section with two columns */}
        <div className="top-section">
          {/* Left Section */}
          <div className="info3-content">
            <div className="header-label">
              BLOCKCHAIN INDEXING
            </div>

            <div className="hero-section">
              <h1>
                Your Gateway to<br />
                Advanced Blockchain<br />
                Data Indexing
              </h1>
              
              <p>
                Experience the power of the Unmarshal Network, where
                blockchain indexing meets decentralization. Our Proof of
                Staked Authority model empowers community members
                to run indexers, enhancing reliability and trust.
              </p>

              <button className="explore-button">
                EXPLORE
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="visualization-section">
            <div className="coin-visualization">
              <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-03-26 152133.png`} alt="3D Visualization" className="coin-image" />
            </div>
          </div>
        </div>

        {/* Features Grid - Full Width */}
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Deep Indexing</h3>
            <p>
              We're best in class data decoders extract rich information. It synthesizes on-chain & off-chain data to get contextual meaning.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Rich API suite</h3>
            <p>
              Unmarshal Indexer tracks every single data bit that flows into blockchain and helps retrieve it easily. Token balances etc.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Customer centric</h3>
            <p>
              We offer 24x7 support assistance and dedicated channels for enterprise clients with flexible pricing plans.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 12h-4" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 12H2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 22v-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>True saas</h3>
            <p>
              Unmarshal Indexer tracks every single data bit that flows into blockchain and helps retrieve it easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info3;
