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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-background dark:bg-gray-900 shadow-md rounded-lg overflow-hidden text-foreground dark:text-white">
        <div className="relative">
          <div className="w-full h-32 sm:h-48 bg-muted dark:bg-gray-800 overflow-hidden">
            <img src={profile.bannerUrl} alt="Profile banner" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-4 sm:left-8 -bottom-12 sm:-bottom-16">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-background dark:border-gray-900 overflow-hidden shadow-lg">
              <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="pt-16 sm:pt-20 px-4 sm:px-8 pb-6">
          <h1 className="text-xl sm:text-2xl font-bold">{profile.name}</h1>
          <p className="text-primary dark:text-primary/80 font-medium">@{profile.handle}</p>
          <p className="mt-2 text-muted dark:text-muted/80">{profile.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-muted dark:text-muted/80 mr-2"></i>
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-alt text-muted dark:text-muted/80 mr-2"></i>
              <span>Joined {profile.joinDate}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-link text-muted dark:text-muted/80 mr-2"></i>
              <a href={profile.website} className="text-primary dark:text-primary/80 hover:underline" target="_blank" rel="noopener noreferrer">
                {profile.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold">{profile.followers}</div>
              <div className="text-muted dark:text-muted/80 text-sm">Followers</div>
            </div>
            <div>
              <div className="text-xl font-bold">{profile.following}</div>
              <div className="text-muted dark:text-muted/80 text-sm">Following</div>
            </div>
            <div>
              <div className="text-xl font-bold">{profile.links}</div>
              <div className="text-muted dark:text-muted/80 text-sm">Links</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-8 bg-background dark:bg-gray-900 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-6 text-foreground dark:text-white">My Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleLinks.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
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