// Info7.js
import React, { useState } from 'react';
import { MessageCircle, Twitter, Github, Disc as Discord, SunMedium as Medium } from 'lucide-react';
import './Info7.css';
import { ArrowRight, Database, Network } from 'lucide-react';

function Info7() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail('');
  };

  return (
    <div className="info7-container">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Newsletter Signup */}
          <div className="newsletter">
            <h2 className="text-5xl font-light mb-4">Join Our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Hipster ipsum tattooed brunch I'm baby. Bread on hipster deep piz meditation.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="input-field"
              />
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Box */}
          <div className="contact-box">
            <div className="icon-container">
              <MessageCircle size={32} className="text-gray-400" />
            </div>
            <div>
              <p className="text-gray-300 mb-2">
                Your feedback is much appreciated. Send an email to{' '}
                <a href="mailto:info@unmarshal.io" className="text-[#DEFF0A]">
                  info@unmarshal.io
                </a>{' '}
                for enquires.
              </p>
              <button className="text-sm font-medium">SEND MESSAGE</button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer-container">
          {/* Logo and Description */}
          <div className="logo-description">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-[#CDFF00]" />
              <span className="ml-2 text-xl font-semibold">Unmarshal</span>
            </div>
            <p className="text-gray-400 max-w-md">
              The easiest way to query blockchain data from 20+ chains including Ethereum, BSC, Polygon
            </p>
          </div>

          {/* Footer Links and Social */}
          <div className="footer-links-social">
            {/* Social Icons */}
            <div className="social-icons">
              <Twitter size={20} className="icon" />
              <Medium size={20} className="icon" />
              <MessageCircle size={20} className="icon" />
              <Discord size={20} className="icon" />
              <Github size={20} className="icon" />
            </div>

            {/* Company Links */}
            <div className="company-links">
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Unmarshal 2.0</a></li>
                <li><a href="#" className="hover:text-white">$MARSH</a></li>
                <li><a href="#" className="hover:text-white">Roadmap</a></li>
                <li><a href="#" className="hover:text-white">Company</a></li>
                <li><a href="#" className="hover:text-white">Explorer</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="legal-links">
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Notifications</a></li>
                <li><a href="#" className="hover:text-white">DeFi APIs</a></li>
                <li><a href="#" className="hover:text-white">NFT APIs</a></li>
                <li><a href="#" className="hover:text-white">Bridge</a></li>
                <li><a href="#" className="hover:text-white">Stake</a></li>
                <li><a href="#" className="hover:text-white">NFT Indexer</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>© 2024 Unmarshal. All Rights Reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info7;