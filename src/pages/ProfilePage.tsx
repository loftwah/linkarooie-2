import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Profile from '../components/Profile';
import { Profile as ProfileType } from '../types';
import { profiles } from '../data/profiles';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the profile based on handle/username
    const foundProfile = profiles.find(p => p.handle === username);
    
    if (foundProfile) {
      setProfile(foundProfile);
    } else {
      // If profile not found, redirect to 404
      navigate('/404', { replace: true });
    }
    
    setLoading(false);
  }, [username, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  }

  if (!profile) {
    return null; // Will redirect to 404
  }

  return <Profile profile={profile} />;
};

export default ProfilePage;