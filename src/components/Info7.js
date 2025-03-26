import React, { useState } from 'react';
import { MessageCircle, Twitter, Github, Disc as Discord, SunMedium as Medium } from 'lucide-react';
import './Info7.css';
import { Database } from 'lucide-react';

function Info7() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="info7-container">
      <div className="container mx-auto px-4">
        {/* Newsletter and Contact Section */}
        <div className="newsletter-contact-grid">
          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <h2 className="text-5xl font-light mb-4">Join Our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Hipster ipsum tattooed brunch I'm baby. Bread on hipster deep plz meditation.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="email-input"
              />
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Box */}
          <div className="contact-box">
            <div className="message-icon">
              <MessageCircle size={32} className="text-gray-400" />
            </div>
            <div className="contact-content">
              <p className="text-gray-300">
                Your feedback is much appreciated. Send an email to{' '}
                <a href="mailto:info@unmarshal.io" className="text-[#DEFF0A]">
                  info@unmarshal.io
                </a>{' '}
                for enquires.
              </p>
              <button className="send-message-btn">SEND MESSAGE</button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="footer">
          {/* Logo and Description */}
          <div className="brand-section">
            <div className="brand-logo">
              <Database className="h-8 w-8 text-[#CDFF00]" />
              <span className="brand-name">Unmarshal</span>
            </div>
            <p className="brand-description">
              The easiest way to query blockchain data from 20+ chains including Ethereum, BSC, Polygon
            </p>
          </div>

          {/* Social Icons */}
          <div className="social-links">
            <Twitter size={20} className="social-icon" />
            <Medium size={20} className="social-icon" />
            <MessageCircle size={20} className="social-icon" />
            <Discord size={20} className="social-icon" />
            <Github size={20} className="social-icon" />
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {/* Company Links */}
            <div className="links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Unmarshal 2.0</a></li>
                <li><a href="#">$MARSH</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Explorer</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="links-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">DeFi APIs</a></li>
                <li><a href="#">NFT APIs</a></li>
                <li><a href="#">Bridge</a></li>
                <li><a href="#">Stake</a></li>
                <li><a href="#">NFT Indexer</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>© 2024 Unmarshal. All Rights Reserved</p>
            <div className="legal-links">
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info7;
