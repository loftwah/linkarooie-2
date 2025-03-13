import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Analytics from './Analytics';
import { profiles } from '../data/profiles';

const AnalyticsPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const profile = profiles.find(p => p.handle === username);

  if (!profile || !profile.isPublic) {
    return (
      <>
        <Helmet>
          <title>Profile Not Found | Linkarooie</title>
        </Helmet>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          Profile not found
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{username}'s Analytics | Linkarooie</title>
        <meta name="description" content={`Analytics for ${username}'s Linkarooie profile.`} />
      </Helmet>
      <Analytics username={username!} />
    </>
  );
};

export default AnalyticsPage; 