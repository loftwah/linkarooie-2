import React, { useEffect } from 'react';
import { Profile as ProfileType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LinkCard from './LinkCard';
import AchievementCard from './AchievementCard';
import { logHiddenContent } from '../utils/console';
import { Helmet } from 'react-helmet';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ProfileProps {
  profile: ProfileType;
}

// Map platform names to their icon names
const platformIcons = {
  github: ['fab', 'github'] as IconProp,
  twitter: ['fab', 'x-twitter'] as IconProp, // Updated to X (formerly Twitter)
  bluesky: ['fab', 'bluesky'] as IconProp, // Correct Bluesky icon from Font Awesome
  linkedin: ['fab', 'linkedin'] as IconProp
};

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  useEffect(() => {
    const hiddenLinks = profile.links.filter(l => l.hidden);
    const hiddenAchievements = profile.achievements.filter(a => a.hidden);
    if (hiddenLinks.length || hiddenAchievements.length) {
      logHiddenContent(hiddenLinks, hiddenAchievements);
    }
  }, [profile]);

  return (
    <>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Linkarooie" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:image" content={profile.ogImageUrl} />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={profile.name} />
        <meta name="twitter:description" content={profile.description} />
        <meta name="twitter:image" content={profile.ogImageUrl} />
        <meta name="twitter:site" content={`@${profile.handle}`} />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 pt-12 pb-12">
          <img
            src={profile.bannerUrl}
            alt="Banner"
            className="w-[600px] h-40 mx-auto object-cover rounded-lg"
          />
          <div className="relative text-center -mt-10">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-28 h-28 rounded-full mx-auto border-3 border-white shadow-md"
            />
            <h1 className="text-3xl font-bold text-center">{profile.name}</h1>
            <h2 className="text-xl text-gray-400">@{profile.handle}</h2>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">{profile.description}</p>
            <div className="flex justify-center mt-4 space-x-4">
              {profile.socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-lime-300 hover:text-blue-600 dark:hover:text-lime-400 transition-colors"
                >
                  <FontAwesomeIcon 
                    icon={platformIcons[link.platform]} 
                    size="2x" 
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Links</h2>
            <div className="space-y-4 mt-4">
              {profile.links.filter(l => !l.hidden).map(link => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
          {profile.achievements && profile.achievements.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Achievements</h2>
              <div className="space-y-4 mt-4">
                {profile.achievements.filter(a => !a.hidden).map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          )}
          <div className="mt-10 text-center">
            <Link
              to={`/${profile.handle}/analytics`}
              className="inline-block bg-blue-500 dark:bg-lime-500 hover:bg-blue-600 dark:hover:bg-lime-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2" /> View Analytics
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
