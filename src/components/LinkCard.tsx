import React from 'react';
import '../styles/LinkCard.css';
import { Link } from '../types';
import { trackLinkClick } from '../utils/analytics';

interface LinkCardProps {
  link: Link;
  handle: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, handle }) => {
  // Function to extract domain from url
  const getDomain = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return url;
    }
  };

  // Function to handle card click
  const handleClick = () => {
    // Track the click
    trackLinkClick(link, handle);
    // Open the link in a new tab
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="link-card" onClick={handleClick}>
      <div className="link-icon">
        <i className={`fas ${link.icon}`}></i>
      </div>
      <div className="link-content">
        <h3 className="link-title">{link.title}</h3>
        {link.description && <p className="link-description">{link.description}</p>}
        <div className="link-domain">
          <i className="fas fa-globe-americas"></i>
          <span>{getDomain(link.url)}</span>
        </div>
      </div>
      <div className="link-footer">
        <span className="view-link">Visit Link</span>
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default LinkCard; 