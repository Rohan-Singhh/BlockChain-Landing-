import React, { useEffect, useRef } from 'react';
import './Info2.css'; // Import the CSS file

const Info2 = () => {
  // Create refs for the stats container and each stat number
  const statsRef = useRef(null);
  const requestsServedRef = useRef(null);
  const chainsIndexedRef = useRef(null);
  const clientsServedRef = useRef(null);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Trigger animations when the section is visible
          animateNumber(requestsServedRef.current, 0, 11, 2000);
          animateNumber(chainsIndexedRef.current, 0, 35, 2000);
          animateNumber(clientsServedRef.current, 0, 4100, 2000);
          // Disconnect observer to prevent re-triggering
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe the stats container
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Cleanup function to disconnect observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to animate numbers (unchanged)
  function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentNumber = Math.floor(progress * (end - start) + start);
      element.textContent = currentNumber;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  return (
    <div ref={statsRef} className="stats-container">
      <div className="left-section">
        <p className="stats-label">Our Stats So Far</p>
        <h1>
          Join The
          <br />
          Community
          <br />
          Of Million
        </h1>
        <button className="join-now">JOIN NOW →</button>
      </div>
      <div className="right-section">
        <div className="stat-item">
          <p className="stat-label">Requests Served</p>
          <h2 ref={requestsServedRef} className="stat-number requests-served">
            0
          </h2>
          <p className="stat-suffix">Billion</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Chains Indexed</p>
          <h2 ref={chainsIndexedRef} className="stat-number chains-indexed">
            0
          </h2>
          <p className="stat-suffix">+</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Clients Served</p>
          <h2 ref={clientsServedRef} className="stat-number clients-served">
            0
          </h2>
          <p className="stat-suffix">+</p>
        </div>
      </div>
    </div>
  );
};

export default Info2;