import React from 'react';
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
    <div 
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mr-3">
          <i className={`fas ${link.icon}`}></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{link.title}</h3>
      </div>
      
      {link.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{link.description}</p>
      )}
      
      <div className="mt-auto">
        <div className="text-xs text-gray-500 mb-2 flex items-center">
          <i className="fas fa-globe-americas mr-1"></i>
          <span>{getDomain(link.url)}</span>
        </div>
        
        <div className="flex justify-between items-center text-indigo-600 text-sm font-medium">
          <span>Visit Link</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default LinkCard; 