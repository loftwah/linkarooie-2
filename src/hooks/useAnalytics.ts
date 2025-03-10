import { useState, useEffect } from 'react';
import { AnalyticsData } from '../types';

// Mock data for demonstration
const generateMockData = (handle: string): AnalyticsData => {
  return {
    pageViews: Math.floor(Math.random() * 10000) + 5000,
    uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
    browsers: {
      'Chrome': Math.floor(Math.random() * 3000) + 2000,
      'Safari': Math.floor(Math.random() * 1500) + 500,
      'Firefox': Math.floor(Math.random() * 800) + 200,
      'Edge': Math.floor(Math.random() * 500) + 100,
      'Other': Math.floor(Math.random() * 200) + 50,
    },
    locations: {
      'United States': Math.floor(Math.random() * 2000) + 1000,
      'United Kingdom': Math.floor(Math.random() * 800) + 400,
      'Canada': Math.floor(Math.random() * 600) + 300,
      'Germany': Math.floor(Math.random() * 500) + 200,
      'France': Math.floor(Math.random() * 400) + 150,
      'Australia': Math.floor(Math.random() * 300) + 100,
      'Other': Math.floor(Math.random() * 1000) + 500,
    },
    linkClicks: {
      'Portfolio Website': Math.floor(Math.random() * 2000) + 1000,
      'GitHub Profile': Math.floor(Math.random() * 1500) + 500,
      'LinkedIn': Math.floor(Math.random() * 1200) + 400,
      'Latest Article': Math.floor(Math.random() * 1000) + 300,
      'Twitter': Math.floor(Math.random() * 800) + 200,
    }
  };
};

const useAnalytics = (handle: string) => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, this would be an API call
        // For demo purposes, we're using mock data with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (!handle) {
          throw new Error('Username is required');
        }
        
        // Generate mock data based on the handle
        const mockData = generateMockData(handle);
        setData(mockData);
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching analytics data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [handle]);

  return {
    pageViews: data?.pageViews || 0,
    uniqueVisitors: data?.uniqueVisitors || 0,
    browsers: data?.browsers || {},
    locations: data?.locations || {},
    linkClicks: data?.linkClicks || {},
    isLoading,
    error
  };
};

export default useAnalytics; 