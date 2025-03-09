import React from 'react';
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
      const [day, month] = parts;
      if (!showYear) {
        return `${day} ${month}`; // Return just "DD MMM"
      }
      return date; // Return full date if showYear is true
    }
    
    return date; // Return original if not in expected format
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full mr-3">
          <i className={`fas ${achievement.icon}`}></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{achievement.title}</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
        {achievement.description}
      </p>
      
      <div className="mt-auto flex items-center text-xs text-amber-600 font-medium">
        <i className="fas fa-calendar-alt mr-1"></i>
        <span>{formatDate()}</span>
      </div>
    </div>
  );
};

export default AchievementCard; 