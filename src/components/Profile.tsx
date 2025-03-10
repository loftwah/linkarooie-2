import React, { useEffect } from 'react';
import { Profile as ProfileType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import LinkCard from './LinkCard';
import AchievementCard from './AchievementCard';
import { logHiddenContent } from '../utils/console';

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
    <div className="min-h-screen bg-gray-900 text-white">
      <img src={profile.bannerUrl} alt="Banner" className="w-full h-48 object-cover" />
      <div className="max-w-2xl mx-auto px-4 text-center -mt-16">
        <img src={profile.avatarUrl} alt={profile.name} className="w-32 h-32 rounded-full mx-auto border-4 border-white" />
        <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
        <h2 className="text-xl text-gray-400">@{profile.handle}</h2>
        <p className="text-lg mt-2">{profile.description}</p>
        <div className="flex justify-center mt-4 space-x-4">
          {profile.socialLinks.map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-lime-300 hover:text-lime-400">
              <FontAwesomeIcon icon={platformIcons[link.platform]} size="2x" />
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {profile.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-white rounded px-2 py-1 m-1">{tag}</span>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-center">Links</h2>
        <div className="space-y-4 mt-4">
          {profile.links.filter(l => !l.hidden).map(link => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-center">Achievements</h2>
        <div className="space-y-4 mt-4">
          {profile.achievements.filter(a => !a.hidden).map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to={`/${profile.handle}/analytics`} className="text-gray-400 hover:text-lime-300">
          <FontAwesomeIcon icon="chart-line" /> View Analytics
        </Link>
      </div>
    </div>
  );
};

export default Profile;