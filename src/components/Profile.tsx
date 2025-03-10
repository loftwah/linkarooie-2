import React, { useEffect } from 'react';
import { Profile as ProfileType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LinkCard from './LinkCard';
import AchievementCard from './AchievementCard';
import { logHiddenContent } from '../utils/console';
import { Helmet } from 'react-helmet'; // Added react-helmet import

interface ProfileProps {
  profile: ProfileType;
}

const platformIcons = {
  github: faGithub,
  twitter: faTwitter,
  bluesky: faBluesky,
  linkedin: faLinkedin
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
        <meta property="og:image" content={profile.ogImage} />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={profile.name} />
        <meta name="twitter:description" content={profile.description} />
        <meta name="twitter:image" content={profile.ogImage} />
        <meta name="twitter:site" content={`@${profile.handle}`} />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
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
            <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
            <h2 className="text-xl text-gray-400">@{profile.handle}</h2>
            <p className="text-lg mt-2">{profile.description}</p>
            <div className="flex justify-center mt-4 space-x-4">
              {profile.socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-300 hover:text-lime-400"
                >
                  <FontAwesomeIcon icon={platformIcons[link.platform]} size="2x" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Links</h2>
            <div className="space-y-4 mt-4">
              {profile.links.filter(l => !l.hidden).map(link => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">Achievements</h2>
            <div className="space-y-4 mt-4">
              {profile.achievements.filter(a => !a.hidden).map(achievement => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to={`/${profile.handle}/analytics`}
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded"
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
