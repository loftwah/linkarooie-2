import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Profile from '../components/Profile';
import profiles from '../data/profiles';
import { trackProfileView } from '../utils/analytics';

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  
  // Track page view - moved before conditionals to avoid hook order issues
  useEffect(() => {
    if (username) {
      trackProfileView(username);
    }
  }, [username]);
  
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
  
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Profile profile={profile} />
      </div>
    </div>
  );
};

export default ProfilePage; 