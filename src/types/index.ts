export interface Profile {
  name: string;
  handle: string;
  description: string;
  avatarUrl: string | any;
  bannerUrl: string | any;
  tags: string[];
  socialLinks: SocialLink[];
  links: Link[];
  achievements: Achievement[];
  isPublic: boolean;
  showInDirectory: boolean;
}

export interface SocialLink {
  platform: "github" | "twitter" | "bluesky" | "linkedin";
  url: string;
}

export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  hidden?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  icon: string;
  showFullDate?: boolean;
  showYear?: boolean;
  hidden?: boolean;
} 