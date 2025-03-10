import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground dark:text-white">
              <span className="block">Share Your Links With</span>
              <span className="block text-primary">Style and Insights</span>
            </h1>
            <p className="mt-4 text-xl text-muted dark:text-muted/80 max-w-2xl mx-auto">
              Create a beautiful link landing page, track engagement, and grow your audience.
              All in one platform designed for creators and professionals.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link 
                to="/loftwah" 
                className="px-8 py-3 rounded-lg font-medium bg-primary hover:bg-primary/90 text-white transition-colors"
              >
                View Demo Profile
              </Link>
              <Link 
                to="/signup" 
                className="px-8 py-3 rounded-lg font-medium bg-background dark:bg-gray-800 text-foreground dark:text-white border border-border dark:border-gray-700 hover:bg-primary/10 dark:hover:bg-gray-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground dark:text-white">Why Choose Linkarooie?</h2>
            <p className="mt-4 text-xl text-muted dark:text-muted/80 max-w-2xl mx-auto">
              Everything you need to promote your content, grow your audience, and track your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-paint-brush text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Beautiful Profiles</h3>
              <p className="text-muted dark:text-muted/80">
                Customizable layouts, themes, and animations that make your links stand out from the crowd.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Advanced Analytics</h3>
              <p className="text-muted dark:text-muted/80">
                Track clicks, engagement, and conversion rates to optimize your content strategy.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-trophy text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Achievements</h3>
              <p className="text-muted dark:text-muted/80">
                Gamified milestones that celebrate your growth and keep you motivated.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Mobile Optimized</h3>
              <p className="text-muted dark:text-muted/80">
                Perfect experience on any device, with fast loading times and responsive design.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-code text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Developer Friendly</h3>
              <p className="text-muted dark:text-muted/80">
                Custom domains, API integrations, and embedding options for maximum flexibility.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-background dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">Privacy Focused</h3>
              <p className="text-muted dark:text-muted/80">
                No ads, no tracking except what you choose to measure for your own content.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground dark:text-white">Ready to showcase your content?</h2>
          <p className="mt-4 text-xl text-muted dark:text-muted/80">
            Join thousands of creators, professionals, and brands using Linkarooie to connect with their audience.
          </p>
          <div className="mt-10">
            <Link 
              to="/signup" 
              className="px-8 py-3 rounded-lg font-medium bg-primary hover:bg-primary/90 text-white transition-colors"
            >
              Create Your Profile
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted dark:text-muted/80">
            No credit card required. Free plan available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 