import React, { useEffect, useRef, useState } from 'react';
import './Info.css';  // Import your CSS file
import { ArrowRight, Database, Network } from 'lucide-react';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const infoRef = useRef(null); // Reference to the Info section
  const textRef = useRef(null); // Reference to the text content

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when Info section is in view
          // Adding the 'animate' class to trigger the text brightness effect
          if (textRef.current) {
            textRef.current.classList.add('animate');
          }
        } else {
          // Remove the 'animate' class when not in view
          if (textRef.current) {
            textRef.current.classList.remove('animate');
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    // Clean up observer when the component unmounts
    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  return (
    <div className="container" ref={infoRef}>
      <div className="header">UNMARSHAL 2.0</div>
      <div className="subtitle">Blockchain and AI Integration</div>

      <div className="main-content">
        <div className="text-content" ref={textRef}>
          <span className="highlight">Unmarshal</span> is
          <span className="icon">🔸</span>
          <span className="icon">📊</span>
          <span className="icon">🔮</span>
          revolutionizing the intersection of blockchain and artificial intelligence, ushering in a new era of blockchain data indexing
          <span className="icon arrow">↗️</span>
          Our mission is to seamlessly integrate
          <span className="icon link">🔗</span>
          these key technologies to unlock new possibilities and drive innovations
        </div>
      </div>

      {/* Learn More Section */}
      <div className="learn-more">
        <p>LEARN MORE ABOUT UNMARSHAL 2.O   &#8594;  </p>
      </div>
    </div>
  );
};

export default Info;
