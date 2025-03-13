import React from 'react';
import { usePostHog } from '../hooks/useAnalytics';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Analytics: React.FC<{ username: string }> = ({ username }) => {
  const posthog = usePostHog();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link 
            to={`/${username}`} 
            className="flex items-center text-blue-500 dark:text-lime-300 hover:text-blue-600 dark:hover:text-lime-400 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Profile
          </Link>
          <h1 className="text-2xl font-bold text-center">{username}'s Analytics</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Total Page Views</h2>
            <p className="text-2xl font-bold text-blue-500 dark:text-lime-400">41,037</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Unique Visitors</h2>
            <p className="text-2xl font-bold text-blue-500 dark:text-lime-400">3,650</p>
          </div>
        </div>
        {/* Add more analytics sections as needed */}
      </div>
    </div>
  );
};

export default Analytics;