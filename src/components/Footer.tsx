import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background dark:bg-gray-900 text-foreground dark:text-white border-t border-border dark:border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkarooie</h3>
            <p className="text-muted dark:text-muted/80">
              Share your links with style and track your engagement in one place.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Home</Link></li>
              <li><Link to="/dashboard" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Dashboard</Link></li>
              <li><Link to="/profile" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Help Center</Link></li>
              <li><Link to="/terms" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-muted dark:text-muted/80 hover:text-primary dark:hover:text-primary/80">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border dark:border-gray-800 text-center text-muted dark:text-muted/80 text-sm">
          &copy; {new Date().getFullYear()} Linkarooie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 