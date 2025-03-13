import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { profiles } from '../src/data/profiles';
import { Profile } from '../src/types';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create static HTML files with correct OG tags and a smart 404.html
async function generateSeoFiles(): Promise<void> {
  const baseUrl = 'https://linkarooie.deanlofts.xyz'; // Used for OG tags
  console.log(`Generating SEO files with base URL: ${baseUrl}`);
  
  // Read the main HTML file
  const distDir = path.resolve(__dirname, '../dist');
  const indexHtmlPath = path.resolve(distDir, 'index.html');
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  
  // Generate landing page OG tags
  const landingPageOgTags = `
    <title>Linkarooie - All Your Links in One Place</title>
    <meta name="description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Linkarooie - All Your Links in One Place" />
    <meta property="og:description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
    <meta property="og:image" content="${baseUrl}/images/default_og.jpg" />
    <meta property="og:url" content="${baseUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
  `;
  
  // Update main index.html with landing page OG tags
  const updatedLandingHtml = indexHtml.replace(
    '<!-- OG_TAGS_PLACEHOLDER -->', 
    landingPageOgTags
  );
  fs.writeFileSync(indexHtmlPath, updatedLandingHtml);
  
  // Create the images directory if it doesn't exist
  const imagesDir = path.resolve(distDir, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Generate profile-specific pages
  for (const profile of profiles) {
    if (!profile.isPublic) continue;
    
    console.log(`Generating SEO file for profile: ${profile.handle}`);
    
    // Skip profiles without required properties
    if (!profile.handle) {
      console.log('Skipping profile with undefined handle');
      continue;
    }
    
    // Ensure other required properties exist
    const name = profile.name || profile.handle;
    const description = profile.bio || `${name}'s profile`;
    const ogImageUrl = profile.ogImageUrl || '/assets/default-profile-image.jpg';
    const twitterHandle = profile.handle || '';
    
    const profileHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${name} - Linkarooie</title>
        <meta name="description" content="${description}" />
        <meta property="og:title" content="${name} - Linkarooie" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${baseUrl}/${profile.handle}" />
        <meta property="og:image" content="${baseUrl}${ogImageUrl}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${name} - Linkarooie" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${baseUrl}${ogImageUrl}" />
        <meta name="twitter:site" content="@${twitterHandle}" />
      </head>
      <body>
        <p>Redirecting...</p>
      </body>
      </html>
    `;
    
    // Create profile directory and index.html
    const profileDir = path.resolve(distDir, profile.handle);
    if (!fs.existsSync(profileDir)) {
      fs.mkdirSync(profileDir, { recursive: true });
    }
    fs.writeFileSync(path.join(profileDir, 'index.html'), profileHtml);
    
    // Create analytics directory and index.html
    const analyticsDir = path.resolve(profileDir, 'analytics');
    if (!fs.existsSync(analyticsDir)) {
      fs.mkdirSync(analyticsDir, { recursive: true });
    }
    const analyticsOgTags = `
      <title>${profile.name}'s Analytics | Linkarooie</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Linkarooie" />
      <meta property="og:title" content="${profile.name}'s Analytics | Linkarooie" />
      <meta property="og:description" content="Analytics for ${profile.name}'s Linkarooie profile." />
      <meta property="og:image" content="${baseUrl}${profile.ogImageUrl}" />
      <meta property="og:url" content="${baseUrl}/${profile.handle}/analytics" />
      <meta name="twitter:card" content="summary_large_image" />
    `;
    const analyticsHtml = indexHtml.replace('<!-- OG_TAGS_PLACEHOLDER -->', analyticsOgTags);
    fs.writeFileSync(path.join(analyticsDir, 'index.html'), analyticsHtml);
  }
  
  // Generate smart 404.html
  const publicProfiles = profiles.filter(p => p.isPublic).map(p => p.handle);
  const fourOhFourHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Not Found | Linkarooie</title>
  <script>
    // List of known public profiles
    var knownProfiles = ${JSON.stringify(publicProfiles)};
    
    // Detect base path (GitHub Pages or custom domain)
    var isGitHubPages = window.location.hostname.includes('github.io');
    var basePath = isGitHubPages ? '/linkarooie-2' : '';
    
    // Function to normalize and check the requested path
    function getRedirectPath(path) {
      var parts = path.split('/').filter(Boolean); // Split and remove empty segments
      var relativePath = isGitHubPages ? parts.slice(1) : parts; // Remove basePath for GitHub Pages
      
      if (relativePath.length === 1) {
        var handle = relativePath[0];
        if (knownProfiles.includes(handle)) {
          return basePath + '/' + handle + '/';
        }
      } else if (relativePath.length === 2) {
        var handle = relativePath[0];
        var subPath = relativePath[1];
        if (knownProfiles.includes(handle) && subPath === 'analytics') {
          return basePath + '/' + handle + '/analytics/';
        }
      }
      // Default to homepage
      return basePath + '/';
    }
    
    // Get the requested path and redirect
    var requestedPath = window.location.pathname;
    var redirectPath = getRedirectPath(requestedPath);
    if (redirectPath !== window.location.pathname) {
      window.location.replace(window.location.origin + redirectPath);
    } else {
      // If we're already on the correct path, do nothing or show a 404 message
      document.body.innerHTML = '<div style="text-align: center; padding: 50px;"><h1>404 - Page Not Found</h1><p>Sorry, this page doesn't exist.</p><a href="' + basePath + '/">Go Home</a></div>';
    }
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
  `;
  fs.writeFileSync(path.resolve(distDir, '404.html'), fourOhFourHtml);
  
  // Create CNAME file (optional, remove if not needed yet)
  fs.writeFileSync(path.resolve(distDir, 'CNAME'), 'linkarooie.deanlofts.xyz');
  
  console.log('✅ SEO files and 404.html generation completed successfully!');
}

generateSeoFiles().catch(err => {
  console.error('Error generating SEO files:', err);
  process.exit(1);
});