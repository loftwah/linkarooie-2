import React from 'react';
import { useParams } from 'react-router-dom';
import Analytics from '../components/Analytics';

const AnalyticsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  
  if (!username) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-background dark:bg-gray-900 shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-foreground dark:text-white">User Not Found</h1>
          <p className="text-muted dark:text-muted/80">Please provide a valid username to view analytics.</p>
        </div>
      </div>
    );
  }
  
  return <Analytics handle={username} />;
};

export default AnalyticsPage; 