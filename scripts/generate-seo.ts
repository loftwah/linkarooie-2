import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { profiles } from '../src/data/profiles';
import { Profile } from '../src/types';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create static HTML files with correct OG tags for each profile
async function generateSeoFiles(): Promise<void> {
  const baseUrl = 'https://linkarooie.com';
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
  
  // Replace placeholder with landing page OG tags
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

  // For each profile, create a directory with index.html
  for (const profile of profiles) {
    if (!profile.isPublic) continue;
    
    console.log(`Generating SEO file for profile: ${profile.handle}`);
    
    // Generate profile-specific OG tags
    const profileOgTags = `
      <title>${profile.ogTitle || profile.name} | Linkarooie</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Linkarooie" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:title" content="${profile.ogTitle || profile.name}" />
      <meta property="og:description" content="${profile.ogDescription || profile.description}" />
      <meta property="og:image" content="${baseUrl}${profile.ogImageUrl}" />
      <meta property="og:url" content="${baseUrl}/${profile.handle}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${profile.ogTitle || profile.name}" />
      <meta name="twitter:description" content="${profile.ogDescription || profile.description}" />
      <meta name="twitter:image" content="${baseUrl}${profile.ogImageUrl}" />
      <meta name="twitter:site" content="@${profile.handle}" />
    `;
    
    // Create the profile directory
    const profileDir = path.resolve(distDir, profile.handle);
    if (!fs.existsSync(profileDir)) {
      fs.mkdirSync(profileDir, { recursive: true });
    }
    
    // Write the profile index.html
    const profileHtml = indexHtml.replace('<!-- OG_TAGS_PLACEHOLDER -->', profileOgTags);
    fs.writeFileSync(path.join(profileDir, 'index.html'), profileHtml);
    
    // Create the analytics directory and its index.html
    const analyticsDir = path.resolve(profileDir, 'analytics');
    if (!fs.existsSync(analyticsDir)) {
      fs.mkdirSync(analyticsDir, { recursive: true });
    }
    
    // Generate analytics page OG tags
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
    
    // Write the analytics index.html
    const analyticsHtml = indexHtml.replace('<!-- OG_TAGS_PLACEHOLDER -->', analyticsOgTags);
    fs.writeFileSync(path.join(analyticsDir, 'index.html'), analyticsHtml);
  }
  
  // Create CNAME file
  fs.writeFileSync(path.resolve(distDir, 'CNAME'), 'linkarooie.com');
  
  console.log('✅ SEO files generation completed successfully!');
}

generateSeoFiles().catch(err => {
  console.error('Error generating SEO files:', err);
  process.exit(1);
}); 