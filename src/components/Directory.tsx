import React from 'react';
import { Profile } from '../types';
import { Link } from 'react-router-dom';

interface DirectoryProps {
  profiles: Profile[];
}

const Directory: React.FC<DirectoryProps> = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
      {profiles.filter(p => p.showInDirectory).map(profile => (
        <Link to={`/${profile.handle}`} key={profile.handle} className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700">
          <img src={profile.avatarUrl} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white text-center">{profile.name}</h2>
          <p className="text-gray-400 text-center">{profile.description}</p>
          <div className="flex flex-wrap justify-center mt-2">
            {profile.tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-gray-700 text-white rounded px-2 py-1 m-1">{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Directory;