import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Info6.css';  // Import the custom CSS file

const Info6 = () => {
  return (
    <div className="bg-[#111111] py-16 text-white" style={{ border : '2px ', minHeight: '500px', marginBottom: '4rem' }}>
      <div className="flex justify-center mb-8">
        <div className="badge">BUILD</div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          #BUILD using Unmarshal AI
        </h1>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Build It Yourself Card */}
          <div className="bg-zinc-900 rounded-3xl p-12 aspect-[1.2/1] flex flex-col relative overflow-hidden group">
            {/* Striped Circle Pattern */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-15">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <pattern id="stripe-pattern" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="2"/>
                  </pattern>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#stripe-pattern)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[2.5rem] font-medium mb-6">
                Build It<br />Yourself
              </h2>
              <p className="text-gray-400 text-lg mb-auto">
                Parsers come with inbuilt support for Indexing, API generation.
              </p>
              <div className="mt-12">
                <button className="learn-more-btn">
                  LEARN MORE <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* We Can Build Card */}
          <div className="bg-[#d1ff1a] rounded-3xl p-12 aspect-[1.2/1] flex flex-col text-black relative overflow-hidden group">
            {/* Curved Lines Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path d="M150,50 Q170,50 170,70 L170,130 Q170,150 150,150" 
                      fill="none" 
                      stroke="black" 
                      strokeWidth="2"
                      className="curved-line"/>
                <path d="M130,50 Q150,50 150,70 L150,130 Q150,150 130,150" 
                      fill="none" 
                      stroke="black" 
                      strokeWidth="2"
                      className="curved-line"/>
                <path d="M110,50 Q130,50 130,70 L130,130 Q130,150 110,150" 
                      fill="none" 
                      stroke="black" 
                      strokeWidth="2"
                      className="curved-line"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[2.5rem] font-medium mb-6">
                We can build<br />for you
              </h2>
              <p className="text-zinc-800 text-lg mb-auto">
                Experts from Unmarshal Network can understand your requirement.
              </p>
              <div className="mt-12">
                <button className="learn-more-btn text-black">
                  LEARN MORE <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info6;
