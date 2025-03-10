import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import { profiles } from '../data/profiles';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const profile = profiles.find(p => p.handle === username);

  if (!profile || !profile.isPublic) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Profile not found</div>;
  }

  return <Profile profile={profile} />;
};

export default ProfilePage;