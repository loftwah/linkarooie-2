import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Linkarooie</h1>
        <p className="landing-description">
          Your personal directory for organizing and sharing links.
          Create collections, track achievements, and build your digital portfolio.
        </p>
        <div className="landing-features">
          <div className="feature-card">
            <h3>Organize Links</h3>
            <p>Create custom collections to categorize your favorite web resources.</p>
          </div>
          <div className="feature-card">
            <h3>Track Achievements</h3>
            <p>Showcase your accomplishments and milestones in a visual format.</p>
          </div>
          <div className="feature-card">
            <h3>Share Your Profile</h3>
            <p>Generate a personalized URL to share your collections with others.</p>
          </div>
        </div>
        <div className="landing-cta">
          <Link to="/signup" className="primary-button">Get Started</Link>
          <Link to="/directory" className="secondary-button">Browse Directories</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 