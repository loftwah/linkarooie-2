# Linkarooie Project Requirements

## 1. Project Overview

Linkarooie is a Linktree-style application that displays user profiles with links and achievements. It's built as a static site using modern web technologies and hosted on GitHub Pages.

## 2. Technology Stack

- **Runtime**: Bun
- **Languages**: TypeScript, HTML
- **Frontend**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Routing**: React Router
- **Analytics**: PostHog
- **Hosting**: GitHub Pages

## 3. Application Architecture

### 3.1 Hosting Requirements

- Must be deployable to GitHub Pages
- Must work with both GitHub Pages default domain and custom domain
- Must be completely static (no server-side processing)

### 3.2 URL Structure

- Root (`/`): Landing page with directory of profiles
- `/:username`: Individual profile page (e.g., `/loftwah`)
- `/:username/analytics`: Analytics for a specific profile

### 3.3 Data Management

- All profile data stored in TypeScript files
- No database or dynamic user creation
- A user exists if and only if there is a corresponding data file
- Updates require code changes and redeployment

## 4. Feature Requirements

### 4.1 Landing Page (Directory)

- Displays Linkarooie branding/logo
- Shows grid of profile cards for users with `showInDirectory: true`
- Each card shows avatar, name, description, and select tags
- Clicking a card navigates to the full profile

### 4.2 Profile Page

- Banner image (3:1 ratio)
- Avatar image (square displayed as circle using CSS)
- Name and handle
- Description text
- Social media icons (GitHub, Twitter/X, Bluesky, LinkedIn)
- Tags displayed with distinct styling
- Links section with clickable cards
- Achievements section with clickable cards and dates
- Link to analytics page
- Hidden content visible only in browser console

### 4.3 Analytics Page

- Shows analytics for a specific profile
- Displays total page views
- Displays unique visitors
- Shows browser breakdown
- Shows geographic location breakdown
- Displays link click statistics
- Filters out bots and search engines

### 4.4 Hidden Content Feature

- Links and achievements can be marked with `hidden: true`
- Hidden items do not appear on the profile page
- Hidden items are visible only in the browser console
- Console output is styled with colors and emojis
- Hidden links are tracked in analytics when clicked

## 5. Data Structures

### 5.1 Profile

```typescript
interface Profile {
  name: string; // User's full name
  handle: string; // Username for URL
  description: string; // Short bio text
  avatarUrl: string; // Path or import reference to square image (displayed as circle)
  bannerUrl: string; // Path or import reference to banner image (3:1 ratio)
  tags: string[]; // Array of skill/interest tags
  socialLinks: SocialLink[]; // Social media links
  links: Link[]; // Regular links
  achievements: Achievement[]; // User achievements
  isPublic: boolean; // Whether profile is publicly accessible
  showInDirectory: boolean; // Whether to show in the directory
}
```

### 5.2 SocialLink

```typescript
interface SocialLink {
  platform: "github" | "twitter" | "bluesky" | "linkedin"; // Platform name
  url: string; // Full URL to profile
}
```

### 5.3 Link

```typescript
interface Link {
  id: string; // Unique identifier
  title: string; // Link title
  description: string; // Link description
  url: string; // Destination URL
  icon: string; // Font Awesome icon name
  hidden?: boolean; // If true, only appears in console
}
```

### 5.4 Achievement

```typescript
interface Achievement {
  id: string; // Unique identifier
  title: string; // Achievement title
  description: string; // Achievement description
  date: string; // Date in format "DD MMM YYYY"
  url: string; // Destination URL
  icon: string; // Font Awesome icon name
  showFullDate?: boolean; // Whether to display full date
  showYear?: boolean; // Whether to display year
  hidden?: boolean; // If true, only appears in console
}
```

## 6. Analytics Implementation

### 6.1 PostHog Integration

- PostHog account is required
- PostHog environment variables must be configured:
  ```
  REACT_APP_PUBLIC_POSTHOG_KEY=your-posthog-key
  REACT_APP_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
  ```

#### PostHog Installation

Using Bun:

```bash
bun add posthog-js
```

#### PostHog Initialization

Integrate PostHog at the root of the app:

```javascript
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: import.meta.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
```

#### Sending Events

PostHog automatically captures page views and clicks. For custom events:

```javascript
posthog.capture("my event", { property: "value" });
```

### 6.2 Events to Track

- Page views with timestamps
- Unique visitors
- Link clicks (regular and hidden)
- Achievement clicks (regular and hidden)

### 6.3 Properties to Capture

- Browser information
- Geographic location
- Link/achievement ID for click events
- Whether the clicked item was hidden

### 6.4 Bot Filtering

- Must implement logic to filter out bots and search engines
- Must exclude bot traffic from analytics data

## 7. Visual Design Requirements

### 7.1 Profile Layout

- Banner spans full width at top
- Avatar positioned partially over banner
- Name and handle prominent below avatar
- Description text below name
- Social icons in a row
- Tags in a wrapped row with distinct styling
- Links and achievements as cards with proper spacing
- All styling implemented using Tailwind CSS classes

### 7.2 Link and Achievement Cards

- Distinct visual styling between links and achievements
- Achievements have date display with configurable format
- Font Awesome icons included on cards
- Hover effects for interactive feedback
- Responsive designs using Tailwind's breakpoint utilities

### 7.3 Console Display for Hidden Content

- Styled console output with colors
- Emojis to distinguish links vs achievements
- Clear message indicating hidden content was found

## 8. Sample Profile Data

```typescript
// Example profile data for Dean Lofts (loftwah)
// When using imported images:
import avatarImage from '../assets/images/loftwah_avatar.jpg';
import bannerImage from '../assets/images/loftwah_banner.jpg';

{
  name: "Dean Lofts",
  handle: "loftwah",
  description: "Only the vibe coder remains.",
  avatarUrl: avatarImage, // Using imported image reference
  bannerUrl: bannerImage, // Using imported image reference
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
}
```

## 9. Project Structure

```
src/
├── components/          # React components
│   ├── Directory.tsx    # Directory grid on landing page
│   ├── Profile.tsx      # Main profile display
│   ├── LinkCard.tsx     # Link card component
│   ├── AchievementCard.tsx  # Achievement card component
│   └── Analytics.tsx    # Analytics display component
├── data/
│   └── profiles/        # Profile data files
│       ├── index.ts     # Exports all profiles
│       └── loftwah.ts   # Dean's profile data
├── hooks/
│   └── useAnalytics.ts  # Hook for PostHog integration
├── pages/               # Page components
│   ├── LandingPage.tsx  # Landing/directory page
│   ├── ProfilePage.tsx  # Individual profile page
│   └── AnalyticsPage.tsx # Analytics page
├── src/
│   ├── assets/          # Assets processed by Vite
│   │   ├── images/      # Image assets
│   │   │   ├── judgemental_linkarooie.jpg  # Hero image
│   │   │   ├── loftwah_avatar.jpg         # Dean's avatar
│   │   │   └── loftwah_banner.jpg         # Dean's banner
├── public/              # Static assets served as-is
├── types/               # TypeScript type definitions
├── utils/
│   ├── analytics.ts     # PostHog helper functions
│   └── console.ts       # Console styling helpers
├── App.tsx              # Main React component with routing
└── main.tsx             # Application entry point
```

## 10. Implementation Requirements

1. **Routing**: Implement React Router with routes for landing page, profile pages, and analytics pages
2. **PostHog**: Set up PostHog account and integrate tracking code as detailed in section 6.1
3. **Console Output**: Implement styled console output for hidden content
4. **Analytics Page**: Create custom analytics page that fetches data from PostHog
5. **Redirects**: Implement proper handling when accessing non-existent profiles
6. **Responsive Design**: Ensure all pages work on mobile, tablet, and desktop
