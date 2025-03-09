import React, { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

interface PostHogProviderProps {
  children: React.ReactNode;
}

const PostHogProvider: React.FC<PostHogProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize PostHog with your project API key
    // In a real application, you would store this in an environment variable
    posthog.init('phc_your_project_api_key', {
      api_host: 'https://app.posthog.com',
      // Only capture events in production
      capture_pageview: process.env.NODE_ENV === 'production',
      // Disable autocapture in development
      autocapture: process.env.NODE_ENV === 'production',
      // Disable in development mode
      loaded: (posthog) => {
        if (process.env.NODE_ENV !== 'production') {
          posthog.opt_out_capturing();
        }
      },
    });
  }, []);

  // Track page views when the location changes
  useEffect(() => {
    // Only capture page views in production
    if (process.env.NODE_ENV === 'production') {
      posthog.capture('$pageview');
    }
  }, [location]);

  return <>{children}</>;
};

export default PostHogProvider; 