import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-blue-500 dark:bg-lime-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-lime-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound; 