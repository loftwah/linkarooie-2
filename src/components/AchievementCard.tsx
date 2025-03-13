import React from 'react';
import { Achievement } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const dateStr = achievement.showFullDate 
    ? achievement.date 
    : achievement.showYear 
      ? achievement.date.split(' ').slice(-1)[0] 
      : achievement.date.split(' ').slice(1, 2)[0];
  
  return (
    <a 
      href={achievement.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow hover:shadow-md dark:hover:bg-gray-700 transition-all duration-200"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
          <FontAwesomeIcon 
            icon={['fas', achievement.icon]} 
            className="text-purple-500 dark:text-lime-300" 
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-lime-300">
            {achievement.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{achievement.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
              {dateStr}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AchievementCard;