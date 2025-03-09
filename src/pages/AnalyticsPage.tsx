import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Analytics from '../components/Analytics';
import profiles from '../data/profiles';
import { trackAnalyticsView } from '../utils/analytics';

const AnalyticsPage = () => {
  const { username } = useParams<{ username: string }>();
  
  // If username is undefined, navigate to home
  if (!username) {
    return <Navigate to="/" />;
  }
  
  // Get profile data
  const profile = profiles[username];
  
  // If profile doesn't exist or is not public, redirect to home
  if (!profile || !profile.isPublic) {
    return <Navigate to="/" />;
  }
  
  // Track analytics page view
  useEffect(() => {
    trackAnalyticsView(username);
  }, [username]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Analytics handle={username} />
    </div>
  );
};

export default AnalyticsPage; 