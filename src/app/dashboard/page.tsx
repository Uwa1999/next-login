
"use client";
import React from 'react';
import './styles.css'; // Import the CSS for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function dashboard() {
  // Social media links, names, colors, and icons
  const socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com', color: '#3b5998', icon: <FaFacebook /> },
    { name: 'Twitter', url: 'https://twitter.com', color: '#00acee', icon: <FaTwitter /> },
    { name: 'Instagram', url: 'https://instagram.com', color: '#e4405f', icon: <FaInstagram /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5', icon: <FaLinkedin /> },
    { name: 'YouTube', url: 'https://youtube.com', color: '#c4302b', icon: <FaYoutube /> },
    { name: 'TikTok', url: 'https://tiktok.com', color: '#c4302b', icon: <FaTiktok /> },
  ];

  return (
    <div className="dashboard">
      <div className="content">
        <header className="header">
          <h1>Social Media Dashboard</h1>
        </header>

        <section className="widgets">
          {socialMedia.map((platform) => (
            <div
              className="widget"
              key={platform.name}
              style={{ borderColor: platform.color }}
            >
              <div className="icon" style={{ color: platform.color }}>
                {platform.icon}
              </div>
              <h3>{platform.name}</h3>
              <button
                className="widget-button"
                style={{ backgroundColor: platform.color }}
                onClick={() => window.open(platform.url, '_blank')}
              >
                Visit {platform.name}
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}




