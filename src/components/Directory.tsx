import React from 'react';
import { Profile } from '../types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseIcon } from '../utils/fontawesome';

interface DirectoryProps {
  profiles: Profile[];
  showFeatured?: boolean;
}

const Directory: React.FC<DirectoryProps> = ({ profiles, showFeatured = false }) => {
  // Filter profiles that should be shown in directory
  const visibleProfiles = profiles.filter(p => p.showInDirectory);
  
  // For featured view (landing page), we might want to highlight certain aspects
  if (showFeatured && visibleProfiles.length === 1) {
    // Single profile featured mode
    const profile = visibleProfiles[0];
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img 
              className="h-48 w-full object-cover md:h-full md:w-48" 
              src={profile.avatarUrl} 
              alt={profile.name} 
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 dark:text-lime-300 font-semibold">Featured Profile</div>
            <Link 
              to={`/${profile.handle}`} 
              className="block mt-1 text-2xl leading-tight font-medium text-black dark:text-white hover:underline"
            >
              {profile.name}
            </Link>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{profile.bio || profile.description}</p>
            
            {/* Display a few key tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.tags?.slice(0, 5).map(tag => (
                <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Display recent achievements if available */}
            {profile.achievements && profile.achievements.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Latest Achievement</h3>
                <div className="mt-1 flex items-center">
                  {profile.achievements[0].icon && (
                    <FontAwesomeIcon 
                      icon={parseIcon(profile.achievements[0].icon)} 
                      className="text-purple-500 dark:text-lime-300 mr-2" 
                    />
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">{profile.achievements[0].title}</span>
                </div>
              </div>
            )}
            
            <div className="mt-6">
              <Link
                to={`/${profile.handle}`}
                className="inline-block bg-blue-500 dark:bg-lime-500 hover:bg-blue-600 dark:hover:bg-lime-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Regular grid view (for multiple profiles)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {visibleProfiles.map(profile => (
        <Link 
          to={`/${profile.handle}`} 
          key={profile.handle} 
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:bg-gray-700 transition-all duration-200"
        >
          <div className="flex items-center">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-20 h-20 rounded-full mr-4 object-cover border-2 border-gray-200 dark:border-gray-700" 
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{profile.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">@{profile.handle}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{profile.bio || profile.description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap mt-3 gap-1">
            {profile.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-lime-100 text-xs rounded px-2 py-1">
                {tag}
              </span>
            ))}
            {profile.tags && profile.tags.length > 3 && (
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-lime-100 text-xs rounded px-2 py-1">
                +{profile.tags.length - 3}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Directory;