import React, { useEffect, useRef, useState } from 'react';
import './Info.css';  // Import your CSS file
import { ArrowRight, Database, Network } from 'lucide-react';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const infoRef = useRef(null); // Reference to the Info section
  const textRef = useRef(null); // Reference to the text content
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize for dynamic styling if necessary
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="max-w-screen-lg mx-auto px-4 py-8 text-center" ref={infoRef}>
      <div className="text-xl tracking-wide mb-2 opacity-0 animate-fadeInDown delay-100">UNMARSHAL 2.0</div>
      <div className="text-lg text-gray-500 mb-16 opacity-0 animate-fadeInDown delay-300">Blockchain and AI Integration</div>

      <div className="opacity-0 animate-fadeInUp delay-600">
        <div className="text-3xl font-semibold text-gray-300 mb-4 max-w-4xl mx-auto" ref={textRef}>
          <span className="text-[#f7931a]">Unmarshal</span> is
          <span className="inline-block transform transition-transform hover:translate-y-1 hover:scale-110 text-[#f7931a]">🔸</span>
          <span className="inline-block transform transition-transform hover:translate-y-1 hover:scale-110 text-[#f7931a]">📊</span>
          <span className="inline-block transform transition-transform hover:translate-y-1 hover:scale-110 text-[#f7931a]">🔮</span>
          revolutionizing the intersection of blockchain and artificial intelligence, ushering in a new era of blockchain data indexing
          <span className="text-[#00ff00]">↗️</span>
          Our mission is to seamlessly integrate
          <span className="text-[#8a8aff]">🔗</span>
          these key technologies to unlock new possibilities and drive innovations.
        </div>
      </div>

      {/* Learn More Section */}
      <div className="mt-10 text-lg text-gray-500 cursor-pointer hover:text-white transition-colors">
        <p>LEARN MORE ABOUT UNMARSHAL 2.0 &#8594;</p>
      </div>
    </div>
  );
};

export default Info;
