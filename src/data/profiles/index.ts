import { loftwah } from './loftwah';

export const profiles = [loftwah];

export type Profile = {
  name: string;
  handle: string;
  avatar: string;
  badge?: "cto" | "dev" | "founder";
  email?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: {
    github: string;
    custom: string;
  };
  bio: string;
};