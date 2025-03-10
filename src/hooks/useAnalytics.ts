import { useEffect } from 'react';
import posthog from 'posthog-js';

export const usePostHog = () => {
  useEffect(() => {
    posthog.init(import.meta.env.POSTHOG_KEY, {
      api_host: import.meta.env.POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      autocapture: true,
    });
  }, []);

  return posthog;
};