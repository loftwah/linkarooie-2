import React, { useState, useEffect } from 'react';
import LinkCard from './LinkCard';
import AchievementCard from './AchievementCard';
import { Profile as ProfileType } from '../types';

interface ProfileProps {
  profile: ProfileType;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState('links');
  const [showConsoleMessage, setShowConsoleMessage] = useState(false);
  
  // Show hidden content message in console
  useEffect(() => {
    if (profile) {
      const hiddenLinks = profile.links.filter(link => link.hidden);
      const hiddenAchievements = profile.achievements.filter(achievement => achievement.hidden);
      
      if (hiddenLinks.length > 0 || hiddenAchievements.length > 0) {
        console.log('%c🔍 Secret content found! 🔍', 'color: #6366f1; font-size: 16px; font-weight: bold;');
        
        if (hiddenLinks.length > 0) {
          console.log('%c🔗 Hidden Links:', 'color: #10b981; font-weight: bold;');
          hiddenLinks.forEach(link => {
            console.log(
              `%c${link.title}: %c${link.description}`,
              'color: #10b981; font-weight: bold;',
              'color: #6b7280;'
            );
            console.log(`URL: ${link.url}`);
          });
        }
        
        if (hiddenAchievements.length > 0) {
          console.log('%c🏆 Hidden Achievements:', 'color: #f59e0b; font-weight: bold;');
          hiddenAchievements.forEach(achievement => {
            console.log(
              `%c${achievement.title}: %c${achievement.description}`,
              'color: #f59e0b; font-weight: bold;',
              'color: #6b7280;'
            );
            console.log(`Date: ${achievement.date}`);
            console.log(`URL: ${achievement.url}`);
          });
        }
        
        setShowConsoleMessage(true);
      }
    }
  }, [profile]);
  
  if (!profile) {
    return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading profile...</div>;
  }
  
  // Filter out hidden items for display
  const visibleLinks = profile.links.filter(link => !link.hidden);
  const visibleAchievements = profile.achievements.filter(achievement => !achievement.hidden);
  
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Profile Header with Banner and Avatar */}
      <div className="relative">
        {/* Banner Image - 3:1 ratio */}
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img 
            src={profile.bannerUrl} 
            alt="Profile banner" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Avatar - positioned partially over banner */}
        <div className="absolute left-8 -bottom-16">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Profile Info - pushed down to accommodate avatar */}
      <div className="pt-20 px-8 pb-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-indigo-600 font-medium">@{profile.handle}</p>
          <p className="mt-2 text-gray-600">{profile.description}</p>
          
          {/* Social Links Row */}
          <div className="flex space-x-4 mt-4">
            {profile.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
                aria-label={`${social.platform} profile`}
              >
                <i className={`fab fa-${social.platform} text-xl`}></i>
              </a>
            ))}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {profile.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex px-8">
          <button 
            className={`py-3 px-4 font-medium border-b-2 transition-colors ${
              activeTab === 'links' 
                ? 'text-indigo-600 border-indigo-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('links')}
          >
            <i className="fas fa-link mr-2"></i> Links
          </button>
          <button 
            className={`py-3 px-4 font-medium border-b-2 transition-colors ${
              activeTab === 'achievements' 
                ? 'text-indigo-600 border-indigo-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('achievements')}
          >
            <i className="fas fa-trophy mr-2"></i> Achievements
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        {activeTab === 'links' && (
          <div className="grid gap-4 md:grid-cols-2">
            {visibleLinks.length > 0 ? (
              visibleLinks.map(link => (
                <LinkCard 
                  key={link.id} 
                  link={link} 
                  handle={profile.handle}
                />
              ))
            ) : (
              <div className="col-span-2 py-8 text-center text-gray-500">No links available</div>
            )}
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="grid gap-4 md:grid-cols-2">
            {visibleAchievements.length > 0 ? (
              visibleAchievements.map(achievement => (
                <AchievementCard 
                  key={achievement.id} 
                  achievement={achievement} 
                  handle={profile.handle}
                />
              ))
            ) : (
              <div className="col-span-2 py-8 text-center text-gray-500">No achievements available</div>
            )}
          </div>
        )}
      </div>
      
      {/* Console Message Hint */}
      {showConsoleMessage && (
        <div className="mx-8 mb-4 p-3 bg-gray-100 rounded-lg text-gray-600 text-sm flex items-center">
          <i className="fas fa-terminal mr-2"></i>
          <span>Psst! Check the browser console for hidden content.</span>
        </div>
      )}
      
      {/* Analytics Link */}
      <div className="border-t border-gray-200 px-8 py-4">
        <a 
          href={`/${profile.handle}/analytics`}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
        >
          <i className="fas fa-chart-line mr-2"></i> View Analytics
        </a>
      </div>
    </div>
  );
};

export default Profile; 