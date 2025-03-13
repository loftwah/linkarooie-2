import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(fab, fas);

// Helper function to parse icon strings
export const parseIcon = (iconString: string) => {
  // Handle different formats: "fa-solid fa-blog", "fa-blog", etc.
  if (!iconString) return ['fas', 'question']; // Default fallback

  const parts = iconString.split(' ');
  
  if (parts.length === 1) {
    // If just one part like "fa-blog", assume it's a solid icon
    return ['fas', parts[0].replace('fa-', '')];
  }
  
  if (parts.length === 2) {
    // If two parts like "fa-solid fa-blog"
    if (parts[0] === 'fa-solid') {
      return ['fas', parts[1].replace('fa-', '')];
    }
    if (parts[0] === 'fa-brands') {
      return ['fab', parts[1].replace('fa-', '')];
    }
  }
  
  // Fallback
  return ['fas', parts[parts.length-1].replace('fa-', '')];
} 