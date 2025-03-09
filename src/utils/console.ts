import { Link, Achievement } from '../types';

/**
 * Logs hidden links to the console with styling
 * @param links Array of hidden links
 */
export const logHiddenLinks = (links: Link[]): void => {
  if (links.length === 0) return;
  
  console.group('%c🔑 Hidden Links Found!', 'color: #ff6b6b; font-weight: bold; font-size: 14px;');
  links.forEach(link => {
    console.log(
      '%c• %s %c%s',
      'color: #ff6b6b; font-weight: bold;',
      link.title,
      'color: #4ecdc4; font-style: italic;',
      link.description
    );
    console.log('%cURL: %c%s', 'color: #868e96;', 'color: #339af0; text-decoration: underline;', link.url);
  });
  console.groupEnd();
};

/**
 * Logs hidden achievements to the console with styling
 * @param achievements Array of hidden achievements
 */
export const logHiddenAchievements = (achievements: Achievement[]): void => {
  if (achievements.length === 0) return;
  
  console.group('%c🏆 Hidden Achievements Found!', 'color: #ffd43b; font-weight: bold; font-size: 14px;');
  achievements.forEach(achievement => {
    console.log(
      '%c• %s %c(%s) %c%s',
      'color: #ffd43b; font-weight: bold;',
      achievement.title,
      'color: #868e96;',
      achievement.date,
      'color: #4ecdc4; font-style: italic;',
      achievement.description
    );
    console.log('%cURL: %c%s', 'color: #868e96;', 'color: #339af0; text-decoration: underline;', achievement.url);
  });
  console.groupEnd();
}; 