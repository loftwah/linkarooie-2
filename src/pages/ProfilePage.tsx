import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Profile from '../components/Profile';
import profiles from '../data/profiles';
import { trackProfileView } from '../utils/analytics';

const ProfilePage = () => {
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
  
  // Track page view
  useEffect(() => {
    trackProfileView(username);
  }, [username]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Profile profile={profile} />
    </div>
  );
};

export default ProfilePage; 