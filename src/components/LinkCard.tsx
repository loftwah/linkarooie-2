import React from 'react';

interface LinkCardProps {
  link: {
    id: string;
    title: string;
    url: string;
    description?: string;
    icon: string;
    clicks: number;
  };
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const handleClick = () => {
    window.open(link.url, '_blank', 'noopener,noreferrer');
    // In a real app, you'd also track the click here
  };

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (error) {
      return url;
    }
  };

  return (
    <div 
      className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/80 rounded-full mr-3">
          <i className={`fas ${link.icon}`}></i>
        </div>
        <h3 className="text-lg font-semibold line-clamp-1 text-foreground dark:text-white">{link.title}</h3>
      </div>
      {link.description && (
        <p className="text-muted dark:text-muted/80 text-sm mb-3 line-clamp-2 flex-grow">{link.description}</p>
      )}
      <div className="mt-auto">
        <div className="text-xs text-muted dark:text-muted/60 mb-2 flex items-center">
          <i className="fas fa-globe-americas mr-1"></i>
          <span>{getDomain(link.url)}</span>
        </div>
        <div className="flex justify-between items-center text-primary dark:text-primary/80 text-sm font-medium">
          <span>Visit Link</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default LinkCard; 