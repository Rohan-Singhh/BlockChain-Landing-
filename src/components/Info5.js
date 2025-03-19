import React, { useEffect } from 'react';
import './Info5.css';  // Import your CSS file

const Info5 = () => {

  useEffect(() => {
    // Add subtle parallax effect to the visualization
    const handleMouseMove = (e) => {
      const centerBox = document.querySelector('.center-box');
      const chainInfo = document.querySelector('.chain-info');

      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;

      centerBox.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
      chainInfo.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
        <div className="badgfe">UNMARSHAL AI</div>

      <main>
        <h1>Revolutionizing Blockchain<br />& AI Integration</h1>

        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-content">
            <div className="feature-badge">UNMARSHAL AI</div>
            <h2>Your Gateway to<br />Advanced Blockchain<br />Data Indexing</h2>

            <div className="features">
              <div className="feature">
                <h3>Decentralized Unmarshal Indexers</h3>
                <p>Experience the power of the Unmarshal Network, where blockchain indexing meets decentralization.</p>
              </div>

              <div className="feature">
                <h3>Unmarshal AI Toolkit</h3>
              </div>

              <div className="feature">
                <h3>Support for RWA Chains and DePIN Protocols</h3>
              </div>
            </div>
          </div>

          {/* Right Section with Visualization */}
          <div className="right-content">
            <div className="visualization">
              <div className="grid">
                <div className="center-box"></div>
                <div className="chain-info">
                  <div className="chain-badge">BINANCE CHAIN</div>
                  <div className="blocks">
                    <span className="number">1,023,456</span>
                    <span className="label">BLOCKS</span>
                  </div>
                </div>
              </div>
              <div className="cylinder">
                <div className="glow"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Info5;
