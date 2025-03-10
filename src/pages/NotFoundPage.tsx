import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-primary dark:text-primary/80 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Page Not Found</h1>
      <p className="text-lg text-muted dark:text-muted/80 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage; 