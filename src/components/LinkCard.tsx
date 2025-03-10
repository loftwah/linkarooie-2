import React from 'react';
import { Link as LinkType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkCardProps {
  link: LinkType;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700">
      <h2 className="text-xl font-bold text-lime-300">
        <FontAwesomeIcon icon={['fas', link.icon]} className="mr-2" /> {link.title}
      </h2>
      <p className="text-gray-400">{link.description}</p>
    </a>
  );
};

export default LinkCard;