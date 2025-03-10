import { Profile } from '../../types';
import avatarImage from '../../assets/images/loftwah_avatar.jpg';
import bannerImage from '../../assets/images/loftwah_banner.jpg';

export const loftwah: Profile = {
  name: "Dean Lofts",
  handle: "loftwah",
  description: "Only the vibe coder remains.",
  avatarUrl: avatarImage,
  bannerUrl: bannerImage,
  tags: ["AWS", "DevOps", "Docker", "GitHub", "Linux", "Open Source", "Ruby", "Ruby on Rails", "Terraform"],
  isPublic: true,
  showInDirectory: true,
  socialLinks: [
    { platform: "github", url: "https://github.com/loftwah" },
    { platform: "twitter", url: "https://twitter.com/loftwah" },
    { platform: "bluesky", url: "https://bsky.app/profile/loftwah.bsky.social" },
    { platform: "linkedin", url: "https://linkedin.com/in/deanlofts" }
  ],
  links: [
    {
      id: "blog",
      title: "My Blog",
      description: "My blog where I write about stuff.",
      url: "https://example.com/blog",
      icon: "fa-blog"
    },
    {
      id: "secret-link",
      title: "Secret Link",
      description: "You found a hidden link!",
      url: "https://example.com/secret",
      icon: "fa-key",
      hidden: true
    }
  ],
  achievements: [
    {
      id: "mashable",
      title: "Featured in Mashable",
      description: "X users react to the CrowdStrike outage with glee and disappointment Raise your hand if you were scared.",
      date: "19 Jul 2024",
      url: "https://mashable.com/article/example",
      icon: "fa-newspaper",
      showFullDate: false
    },
    {
      id: "secret-achievement",
      title: "Secret Achievement",
      description: "You found a hidden achievement!",
      date: "01 Jan 2024",
      url: "https://example.com/secret-achievement",
      icon: "fa-award",
      hidden: true
    }
  ]
};