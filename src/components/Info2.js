import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Info2.css'; // Import the CSS file

const Info2 = () => {
  // Refs for the stats container and each stat number
  const requestsRef = useRef(null);
  const chainsRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    const animateValue = (ref, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (ref.current) {
          ref.current.textContent = value;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue(requestsRef, 0, 11, 2000);
            animateValue(chainsRef, 0, 35, 2000);
            animateValue(clientsRef, 0, 4100, 2000);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (requestsRef.current) observer.observe(requestsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-wrapper">
      <div className="stats-container">
        <div className="stats-content">
          {/* Left Section */}
          <div className="stats-left">
            <div className="stats-badge">OUR STATS SO FAR</div>
            <div className="stats-heading-container">
              <h1 className="stats-heading">
                Join The
              </h1>
              <h1 className="stats-heading">
                Community of
              </h1>
              <h1 className="stats-heading">
                 Million
              </h1>
            </div>
            <button className="join-now-btn">
              JOIN NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Section - Stats */}
          <div className="stats-right">
            <div className="stat-item">
              <div className="stat-label-line">
                <span className="stat-label">REQUESTS SERVED</span>
                <div className="line-decoration"></div>
              </div>
              <div className="stat-value requests">
                <span ref={requestsRef}>0</span>
                <span className="stat-suffix">Billion</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-label-line">
                <span className="stat-label">CHAINS INDEXED</span>
                <div className="line-decoration"></div>
              </div>
              <div className="stat-value chains">
                <span ref={chainsRef}>0</span>
                <span className="stat-suffix">+</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-label-line">
                <span className="stat-label">CLIENTS SERVED</span>
                <div className="line-decoration"></div>
              </div>
              <div className="stat-value clients">
                <span ref={clientsRef}>0</span>
                <span className="stat-suffix">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
