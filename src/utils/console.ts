import { Link, Achievement } from '../types';

export const logHiddenContent = (links: Link[], achievements: Achievement[]) => {
  console.log('%c🔍 Hidden Content Found!', 'color: yellow; font-size: 16px;');
  if (links.length) {
    console.log('%c🔗 Hidden Links:', 'color: cyan; font-size: 14px;');
    links.forEach(link => {
      console.log(`%c- ${link.title}: ${link.url}`, 'color: white;');
    });
  }
  if (achievements.length) {
    console.log('%c🏆 Hidden Achievements:', 'color: magenta; font-size: 14px;');
    achievements.forEach(achievement => {
      console.log(`%c- ${achievement.title}: ${achievement.url}`, 'color: white;');
    });
  }
};