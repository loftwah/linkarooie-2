import { library } from '@fortawesome/fontawesome-svg-core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Brand icons
import { 
  faGithub, 
  faXTwitter,
  faLinkedin,
  faBluesky,
  faAws
} from '@fortawesome/free-brands-svg-icons';

// Solid icons
import { 
  // Icons used in the landing page
  faLink, 
  faArrowLeft, 
  faChartLine, 
  faPalette, 
  faCodeBranch,
  
  // Icons used in profile links
  faBlog,
  faMusic,
  faMagnifyingGlass,
  faList,
  faCode,
  faPeopleRobbery,
  faFileAlt,
  faLandmark,
  
  // Icons used in achievements
  faLock,
  faCloud,
  
  // Default fallback
  faQuestion
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  // Brand icons
  faGithub, 
  faXTwitter,
  faLinkedin,
  faBluesky,
  faAws,
  
  // Solid icons - Landing page
  faLink,
  faArrowLeft,
  faChartLine,
  faPalette,
  faCodeBranch,
  
  // Solid icons - Profile links
  faBlog,
  faMusic,
  faMagnifyingGlass,
  faList,
  faCode,
  faPeopleRobbery,
  faFileAlt,
  faLandmark,
  
  // Solid icons - Achievements
  faLock,
  faCloud,
  
  // Default fallback
  faQuestion
);

// Helper function to parse icon strings
export const parseIcon = (iconString: string): IconProp => {
  // Handle different formats: "fa-solid fa-blog", "fa-blog", etc.
  if (!iconString) return ['fas', 'question'] as IconProp; // Default fallback

  const parts = iconString.split(' ');
  
  if (parts.length === 1) {
    // If just one part like "fa-blog", assume it's a solid icon
    return ['fas', parts[0].replace('fa-', '')] as IconProp;
  }
  
  if (parts.length === 2) {
    // If two parts like "fa-solid fa-blog"
    if (parts[0] === 'fa-solid') {
      return ['fas', parts[1].replace('fa-', '')] as IconProp;
    }
    if (parts[0] === 'fa-brands') {
      return ['fab', parts[1].replace('fa-', '')] as IconProp;
    }
  }
  
  // Fallback
  return ['fas', parts[parts.length-1].replace('fa-', '')] as IconProp;
}