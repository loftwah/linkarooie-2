import posthog from 'posthog-js';
import { Link, Achievement } from '../types';

/**
 * Tracks a profile page view
 * @param handle The profile handle/username
 */
export const trackProfileView = (handle: string): void => {
  posthog.capture('profile_view', { handle });
};

/**
 * Track when a link is clicked
 */
export const trackLinkClick = (link: Link) => {
  // In a real app, this would send data to an analytics service
  console.log(`Link clicked: ${link.title}`);
  
  try {
    // Example of how you might track with a service like PostHog
    if (window.posthog) {
      window.posthog.capture('link_click', {
        link_id: link.id,
        link_title: link.title,
        link_url: link.url
      });
    }
  } catch (error) {
    console.error('Error tracking link click:', error);
  }
};

/**
 * Track when an achievement is clicked
 */
export const trackAchievementClick = (achievement: Achievement, achievementId: string) => {
  // In a real app, this would send data to an analytics service
  console.log(`Achievement clicked: ${achievement.title}`);
  
  try {
    // Example of how you might track with a service like PostHog
    if (window.posthog) {
      window.posthog.capture('achievement_click', {
        achievement_id: achievementId,
        achievement_title: achievement.title,
        achievement_unlocked: achievement.unlocked
      });
    }
  } catch (error) {
    console.error('Error tracking achievement click:', error);
  }
};

/**
 * Tracks a directory view
 */
export const trackDirectoryView = (): void => {
  posthog.capture('directory_view');
};

/**
 * Tracks an analytics page view
 * @param handle The profile handle/username
 */
export const trackAnalyticsView = (handle: string): void => {
  posthog.capture('analytics_view', { handle });
}; 