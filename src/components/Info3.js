import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, RotateCw, Menu, Plus } from 'lucide-react';
import './Info3.css';

function Info3() {
  // Custom hook to detect when an element is in view
  const useOnScreen = (ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Animate only once
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);

    return isVisible;
  };

  // Refs for each section
  const headerRef = useRef(null);
  const heroTextRef = useRef(null);
  const interactiveRef = useRef(null);
  const featuresGridRef = useRef(null);

  // Visibility states
  const isHeaderVisible = useOnScreen(headerRef);
  const isHeroTextVisible = useOnScreen(heroTextRef);
  const isInteractiveVisible = useOnScreen(interactiveRef);
  const isFeaturesVisible = useOnScreen(featuresGridRef);

  return (
    <div className="info3-container min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`header uppercase text-sm tracking-wider mb-12 ${
            isHeaderVisible ? 'visible' : ''
          }`}
        >
          Blockchain Indexing
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={heroTextRef}
            className={`hero-text space-y-8 ${isHeroTextVisible ? 'visible' : ''}`}
          >
            <h1
              style={{ transitionDelay: '0s' }}
              className="text-5xl sm:text-6xl font-bold leading-tight"
            >
              Your Gateway to Advanced Blockchain Data Indexing
            </h1>
            <p
              style={{ transitionDelay: '0.2s' }}
              className="text-gray-400 text-lg max-w-xl"
            >
              Experience the power of the Unmarshal Network, where blockchain
              indexing meets decentralization. Our Proof of Staked Authority
              model empowers community members to run indexers, enhancing
              reliability and trust.
            </p>
            <button
              style={{ transitionDelay: '0.4s' }}
              className="bg-[#CCFF00] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b3e600] transition-colors flex items-center gap-2"
            >
              EXPLORE
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Display */}
          <div
            ref={interactiveRef}
            className={`interactive relative ${isInteractiveVisible ? 'visible' : ''}`}
          >
            <div className="bg-[#111111] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">0x437...59f1</span>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold">$4,546</span>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#222222] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <button className="bg-[#222222] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="bg-[#222222] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <RotateCw className="w-5 h-5" />
                </button>
                <button className="bg-[#222222] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresGridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div
            className={`feature space-y-4 ${isFeaturesVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0s' }}
          >
            <div className="bg-[#CCFF00] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Deep Indexing</h3>
            <p className="text-gray-400">
              We're best in class data decoders extract rich information. It
              synthesizes on-chain & off-chain data to get contextual meaning.
            </p>
          </div>

          <div
            className={`feature space-y-4 ${isFeaturesVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="bg-[#CCFF00] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Rich API suite</h3>
            <p className="text-gray-400">
              Unmarshal Indexer tracks every single data bit that flows into
              blockchain and helps retrieve it easily. Token balances etc.
            </p>
          </div>

          <div
            className={`feature space-y-4 ${isFeaturesVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-[#CCFF00] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Customer centric</h3>
            <p className="text-gray-400">
              We offer 24x7 support assistance and dedicated channels for
              enterprise clients with flexible pricing plans.
            </p>
          </div>

          <div
            className={`feature space-y-4 ${isFeaturesVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="bg-[#CCFF00] w-12 h-12 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">True saas</h3>
            <p className="text-gray-400">
              Unmarshal Indexer tracks every single data bit that flows into
              blockchain and helps retrieve it easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info3;