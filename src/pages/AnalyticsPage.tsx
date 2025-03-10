import React from 'react';
import { useParams } from 'react-router-dom';
import Analytics from '../components/Analytics';
import { profiles } from '../data/profiles';

const AnalyticsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const profile = profiles.find(p => p.handle === username);

  if (!profile || !profile.isPublic) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Profile not found</div>;
  }

  return <Analytics username={username!} />;
};

export default AnalyticsPage;