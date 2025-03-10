export interface Link {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon: string;
  clicks: number;
  hidden?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  total: number;
  unlocked: boolean;
  date: string;
  url?: string;
  showFullDate?: boolean;
  showYear?: boolean;
  hidden?: boolean;
}

export interface Profile {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  bannerUrl: string;
  description: string;
  location: string;
  website: string;
  joinDate: string;
  followers: number;
  following: number;
  links: Link[] | number; // Can be either an array of Link objects or a count
  tags: string[];
  achievements?: Achievement[];
}

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  browsers: Record<string, number>;
  locations: Record<string, number>;
  linkClicks: Record<string, number>;
} 