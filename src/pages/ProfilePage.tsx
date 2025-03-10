import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import { Profile as ProfileType, Link, Achievement } from '../types';

// Mock data for demo purposes - in a real app, this would come from an API
const mockLinks: Link[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    url: 'https://alexjohnson.design',
    description: 'Check out my latest design work and projects',
    icon: 'fa-laptop-code',
    clicks: 4289,
    hidden: false
  },
  {
    id: '2',
    title: 'GitHub Profile',
    url: 'https://github.com/alexjohnson',
    description: 'My open source contributions and personal projects',
    icon: 'fa-github',
    clicks: 1856,
    hidden: false
  },
  {
    id: '3',
    title: 'Latest Blog Post',
    url: 'https://alexjohnson.design/blog/2023-design-trends',
    description: 'My thoughts on design trends for 2023',
    icon: 'fa-newspaper',
    clicks: 923,
    hidden: false
  },
  {
    id: '4',
    title: 'Secret Project',
    url: 'https://secretproject.dev',
    description: 'Something I\'m working on... shh!',
    icon: 'fa-lock',
    clicks: 42,
    hidden: true
  }
];

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Link Master',
    description: 'Reached 10,000 total link clicks',
    icon: 'fa-award',
    progress: 7068,
    total: 10000,
    unlocked: false,
    date: '15 Jun 2023',
    url: 'https://linkarooie.com/achievements/link-master',
    showFullDate: false,
    showYear: true,
    hidden: false
  },
  {
    id: '2',
    title: 'Early Adopter',
    description: 'Joined during the platform\'s beta period',
    icon: 'fa-rocket',
    progress: 1,
    total: 1,
    unlocked: true,
    date: '20 Jan 2022',
    url: 'https://linkarooie.com/achievements/early-adopter',
    showFullDate: true,
    showYear: true,
    hidden: false
  },
  {
    id: '3',
    title: 'Social Butterfly',
    description: 'Connected all your social media accounts',
    icon: 'fa-user-friends',
    progress: 5,
    total: 5,
    unlocked: true,
    date: '10 Mar 2022',
    url: 'https://linkarooie.com/achievements/social-butterfly',
    showFullDate: false,
    showYear: false,
    hidden: false
  },
  {
    id: '4',
    title: 'Hidden Treasure',
    description: 'You found a hidden easter egg!',
    icon: 'fa-gem',
    progress: 1,
    total: 1,
    unlocked: true,
    date: '02 Apr 2022',
    url: 'https://linkarooie.com/achievements/hidden-treasure',
    showFullDate: true,
    showYear: true,
    hidden: true
  }
];

const mockProfile: ProfileType = {
  id: '1',
  name: 'Alex Johnson',
  handle: 'alexjohnson',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bannerUrl: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80',
  description: 'Product designer and web developer based in San Francisco. I create user-friendly interfaces for fast-growing startups.',
  location: 'San Francisco, CA',
  website: 'https://alexjohnson.design',
  joinDate: 'January 2022',
  followers: 2584,
  following: 267,
  links: mockLinks,
  tags: ['Design', 'Development', 'UI/UX', 'Web3'],
  achievements: mockAchievements
};

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // In a real app, fetch profile data from an API
    const fetchProfile = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // For demo, use mock data
        if (username === mockProfile.handle) {
          setProfile(mockProfile);
        } else {
          // If username doesn't match our mock, simulate not found
          setError(`Profile for @${username} not found`);
        }
      } catch (err) {
        setError('An error occurred while fetching profile data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [username]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error || !profile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-background dark:bg-gray-900 shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-foreground dark:text-white">Profile Not Found</h1>
          <p className="text-muted dark:text-muted/80">{error || 'The requested profile could not be found.'}</p>
        </div>
      </div>
    );
  }
  
  return <Profile profile={profile} />;
};

export default ProfilePage; 