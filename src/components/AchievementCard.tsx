import React from 'react';
import '../styles/AchievementCard.css';
import { Achievement } from '../types';
import { trackAchievementClick } from '../utils/analytics';

interface AchievementCardProps {
  achievement: Achievement;
  handle: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  handle
}) => {
  // Function to handle card click
  const handleClick = () => {
    // Track the click
    trackAchievementClick(achievement, handle);
    // Open the link in a new tab
    window.open(achievement.url, '_blank', 'noopener,noreferrer');
  };
  
  // Format date based on preferences
  const formatDate = () => {
    const { date, showFullDate, showYear } = achievement;
    
    if (showFullDate) {
      return date; // Return as is (already formatted as "DD MMM YYYY")
    }
    
    // For simplified date formatting
    const parts = date.split(' ');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      if (!showYear) {
        return `${day} ${month}`; // Return just "DD MMM"
      }
      return date; // Return full date if showYear is true
    }
    
    return date; // Return original if not in expected format
  };

  return (
    <div className="achievement-card" onClick={handleClick}>
      <div className="achievement-icon">
        <i className={`fas ${achievement.icon}`}></i>
      </div>
      <div className="achievement-content">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-description">{achievement.description}</p>
        <div className="achievement-date">
          <i className="fas fa-calendar-alt"></i>
          <span>{formatDate()}</span>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard; 