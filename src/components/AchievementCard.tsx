import React from 'react';
import { Achievement } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const dateStr = achievement.showFullDate ? achievement.date : achievement.showYear ? achievement.date.split(' ').slice(-1)[0] : achievement.date.split(' ').slice(1, 2)[0];
  
  return (
    <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700">
      <h2 className="text-xl font-bold text-lime-300">
        <FontAwesomeIcon icon={['fas', achievement.icon]} className="mr-2" /> {achievement.title}
      </h2>
      <p className="text-gray-400">{achievement.description}</p>
      <p className="text-gray-500">Date: {dateStr}</p>
    </a>
  );
};

export default AchievementCard;