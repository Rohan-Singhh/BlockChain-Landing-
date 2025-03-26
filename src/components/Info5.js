import React from 'react';
import './Info5.css';

const Info5 = () => {
  return (
    <div className="info5-container">
      <div className="info5-badge">UNMARSHAL AI</div>
      
      <h1 className="info5-title">
        Revolutionizing Blockchain
        <br />
        & AI Integration
      </h1>

      <div className="info5-content">
        {/* Left Section */}
        <div className="info5-left">
          <div className="info5-left-badge">UNAMARSHAL AI</div>
          <h2 className="info5-left-title">
            Your Gateway to
            <br />
            Advanced Blockchain
            <br />
            Data Indexing
          </h2>

          <div className="info5-features">
            <div className="feature-item">
              <h3>Decentralized Unmarshal Indexers</h3>
              <p>Experience the power of the Unmarshal Network, where blockchain indexing meets decentralization.</p>
            </div>

            <div className="feature-item">
              <h3>Unmarshal AI Toolkit</h3>
            </div>

            <div className="feature-item">
              <h3>Support for RWA Chains and DePIN Protocols</h3>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="info5-right">
          <div className="image-container">
            <img 
              src="/bitcoin.png" 
              alt="Bitcoin Visualization" 
              className="main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info5;
