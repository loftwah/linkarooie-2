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
 * Tracks a link click
 * @param link The link that was clicked
 * @param handle The profile handle/username
 */
export const trackLinkClick = (link: Link, handle: string): void => {
  posthog.capture('link_click', {
    link_id: link.id,
    link_title: link.title,
    link_url: link.url,
    handle,
    is_hidden: link.hidden || false
  });
};

/**
 * Tracks an achievement click
 * @param achievement The achievement that was clicked
 * @param handle The profile handle/username
 */
export const trackAchievementClick = (achievement: Achievement, handle: string): void => {
  posthog.capture('achievement_click', {
    achievement_id: achievement.id,
    achievement_title: achievement.title,
    achievement_url: achievement.url,
    handle,
    is_hidden: achievement.hidden || false
  });
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