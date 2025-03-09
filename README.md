# Linkarooie

A Linktree-style application that displays user profiles with links and achievements. It's built as a static site using modern web technologies and can be hosted on GitHub Pages.

## Features

- Landing page with directory of profiles
- Individual profile pages with links and achievements
- Analytics for each profile
- Hidden content visible in browser console
- Responsive design using Tailwind CSS

## Technology Stack

- **Runtime**: Bun
- **Languages**: TypeScript, HTML
- **Frontend**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Routing**: React Router
- **Analytics**: PostHog
- **Hosting**: GitHub Pages

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/linkarooie.git
cd linkarooie
```

2. Install dependencies:

```bash
bun install
```

3. Copy the example environment file and update it with your PostHog API keys:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
bun dev
```

5. Open your browser and navigate to http://localhost:5173

## Deployment

To build the application for production, run:

```bash
bun run build
```

The build artifacts will be in the `dist` directory, which can be deployed to GitHub Pages or any static hosting service.

## Adding a New Profile

To add a new profile, create a new TypeScript file in the `src/data/profiles` directory using the existing profiles as templates. Then import and add the profile to the `src/data/profiles/index.ts` file.

## Image Setup

This project uses Vite's asset handling for images. All images should be placed in the `src/assets/images` directory.

Currently, the project uses these images:
- `loftwah_banner.jpg` - Banner image for the profile header
- `loftwah_avatar.jpg` - Profile picture 
- `judgemental_linkarooie.jpg` - Project image

To use images in your components:

```jsx
// Import the image
import myImage from '../assets/images/image-name.jpg';

// Use it in your component
<img src={myImage} alt="Description" />
```

Vite will automatically handle the importing, optimization, and bundling of these assets.

## License

[MIT](LICENSE)
