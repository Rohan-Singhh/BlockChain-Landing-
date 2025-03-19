import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Info6.css';  // Import the custom CSS file

const Info6 = () => {
  return (
    <div className="min-h-screen bg-black text-white">

<div className="badge">BUILD</div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          #BUILD using Unmarshal AI
        </h1>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Build It Yourself Card */}
          <div className="bg-zinc-900 rounded-3xl p-12 aspect-[1.2/1] flex flex-col relative overflow-hidden group card-hover">
            <div className="absolute inset-0">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-15">
                <defs>
                  <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#diagonal-stripes)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-[2.5rem] font-bold mb-3">
                Build It<br />Yourself
              </h2>
              <p className="text-gray-400 text-lg mb-auto opacity-80">
                Parsers come with inbuilt support for Indexing, API generation.
              </p>
              <div className="mt-12">
                <button className="flex items-center gap-2 text-white font-medium uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
                  LEARN MORE <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* We Can Build Card */}
          <div className="bg-[#d1ff1a] rounded-3xl p-12 aspect-[1.2/1] flex flex-col text-black relative overflow-hidden group card-hover">
            <div className="relative z-10">
              <h2 className="text-[2.5rem] font-bold mb-3">
                We can build<br />for<br />you
              </h2>
              <p className="text-zinc-800 text-lg mb-auto opacity-90">
                Experts from Unmarshal Network can understand your requirement.
              </p>
              <div className="mt-12">
                <button className="flex items-center gap-2 text-black font-medium uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
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
