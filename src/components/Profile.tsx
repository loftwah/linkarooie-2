import React, { useState, useEffect } from 'react';
import LinkCard from './LinkCard';
import AchievementCard from './AchievementCard';
import '../styles/Profile.css';
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
    return <div className="profile-loading">Loading profile...</div>;
  }
  
  // Filter out hidden items for display
  const visibleLinks = profile.links.filter(link => !link.hidden);
  const visibleAchievements = profile.achievements.filter(achievement => !achievement.hidden);
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-banner">
          <img src={profile.bannerUrl} alt="Profile banner" />
        </div>
        <div className="profile-avatar">
          <img src={profile.avatarUrl} alt={profile.name} />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-handle">@{profile.handle}</p>
          <p className="profile-description">{profile.description}</p>
          
          <div className="profile-social-links">
            {profile.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-icon ${social.platform}`}
              >
                <i className={`fab fa-${social.platform}`}></i>
              </a>
            ))}
          </div>
          
          <div className="profile-tags">
            {profile.tags.map((tag, index) => (
              <span key={index} className="profile-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'links' ? 'active' : ''}`}
          onClick={() => setActiveTab('links')}
        >
          <i className="fas fa-link"></i> Links
        </button>
        <button 
          className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <i className="fas fa-trophy"></i> Achievements
        </button>
      </div>
      
      <div className="profile-content">
        {activeTab === 'links' && (
          <div className="profile-links">
            {visibleLinks.length > 0 ? (
              visibleLinks.map(link => (
                <LinkCard 
                  key={link.id} 
                  link={link} 
                  handle={profile.handle}
                />
              ))
            ) : (
              <div className="no-items">No links available</div>
            )}
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="profile-achievements">
            {visibleAchievements.length > 0 ? (
              visibleAchievements.map(achievement => (
                <AchievementCard 
                  key={achievement.id} 
                  achievement={achievement} 
                  handle={profile.handle}
                />
              ))
            ) : (
              <div className="no-items">No achievements available</div>
            )}
          </div>
        )}
      </div>
      
      {showConsoleMessage && (
        <div className="console-hint">
          <i className="fas fa-terminal"></i>
          <span>Psst! Check the browser console for hidden content.</span>
        </div>
      )}
      
      <div className="profile-analytics-link">
        <a href={`/${profile.handle}/analytics`}>
          <i className="fas fa-chart-line"></i> View Analytics
        </a>
      </div>
    </div>
  );
};

export default Profile; 