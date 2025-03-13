import React from 'react';
import { Link as LinkType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseIcon } from '../utils/fontawesome';

interface LinkCardProps {
  link: LinkType;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow hover:shadow-md dark:hover:bg-gray-700 transition-all duration-200"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
          <FontAwesomeIcon 
            icon={parseIcon(link.icon)} 
            className="text-blue-500 dark:text-lime-300" 
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-lime-300">
            {link.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{link.description}</p>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;