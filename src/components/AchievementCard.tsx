import React from 'react';
import { trackAchievementClick } from '../utils/analytics';

interface AchievementCardProps {
  achievement: {
    id: string;
    title: string;
    description: string;
    icon: string;
    progress: number;
    total: number;
    unlocked: boolean;
    date: string;
    url?: string;
    showFullDate?: boolean;
    showYear?: boolean;
    hidden?: boolean;
  };
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const progress = Math.round((achievement.progress / achievement.total) * 100);
  
  // Function to handle card click
  const handleClick = () => {
    if (achievement.url) {
      // Track the click
      trackAchievementClick(achievement, achievement.id);
      // Open the link in a new tab
      window.open(achievement.url, '_blank', 'noopener,noreferrer');
    }
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
      className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <div className="flex items-center mb-3">
        <div 
          className={`w-10 h-10 flex items-center justify-center rounded-full mr-3 ${
            achievement.unlocked 
              ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/80' 
              : 'bg-muted/10 dark:bg-muted/20 text-muted dark:text-muted/80'
          }`}
        >
          <i className={`fas ${achievement.icon}`}></i>
        </div>
        <h3 className="text-lg font-semibold text-foreground dark:text-white">{achievement.title}</h3>
      </div>
      
      <p className="text-muted dark:text-muted/80 text-sm mb-3">{achievement.description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted dark:text-muted/80">
            {achievement.progress} / {achievement.total} completed
          </span>
          <span className={achievement.unlocked ? 'text-primary dark:text-primary/80' : 'text-muted dark:text-muted/80'}>
            {progress}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              achievement.unlocked 
                ? 'bg-primary dark:bg-primary/80' 
                : 'bg-muted dark:bg-muted/50'
            }`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      {achievement.unlocked && (
        <div className="mt-3 text-sm font-medium text-primary dark:text-primary/80 flex items-center">
          <i className="fas fa-trophy mr-1"></i>
          <span>Achievement Unlocked!</span>
        </div>
      )}
      
      <div className="mt-auto flex items-center text-xs text-amber-600 dark:text-amber-500 font-medium">
        <i className="fas fa-calendar-alt mr-1"></i>
        <span>{formatDate()}</span>
      </div>
    </div>
  );
};

export default AchievementCard; 