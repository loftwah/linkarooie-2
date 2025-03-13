import React from 'react';
import Directory from '../components/Directory';
import { profiles } from '../data/profiles';
import heroImage from '../assets/images/judgemental_linkarooie.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

const BASE_URL = 'https://linkarooie.deanlofts.xyz'; // Replace with your deployed URL

const LandingPage: React.FC = () => {
  // Get the first profile or null if none exists
  const featuredProfile = profiles.length > 0 ? profiles[0] : null;
  
  return (
    <>
      <Helmet>
        <title>Linkarooie - All Your Links in One Place</title>
        <meta name="description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
        <meta property="og:title" content="Linkarooie - All Your Links in One Place" />
        <meta property="og:description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
        <meta property="og:image" content={`${BASE_URL}/images/default_og.jpg`} />
        <meta property="og:url" content={BASE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 w-full px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-lime-300 dark:to-blue-400 mb-6">Linkarooie</h1>
            <img
              src={heroImage}
              alt="Linkarooie"
              className="w-1/3 max-w-xs mx-auto mb-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Simplify your online presence with a single, customizable link page.
            </p>
            
            {featuredProfile && (
              <Link 
                to={`/${featuredProfile.handle}`}
                className="inline-block bg-blue-500 dark:bg-lime-500 hover:bg-blue-600 dark:hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                Visit Profile
              </Link>
            )}
          </div>
        </section>

        {/* Featured Profile Section */}
        {featuredProfile && (
          <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Featured Profile
              </h2>
              <Directory profiles={[featuredProfile]} showFeatured={true} />
              
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Why Linkarooie?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon icon={faLink} className="text-blue-500 dark:text-lime-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white">One Link For Everything</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Share a single link that connects to all your content, social profiles, and achievements.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon icon={faPalette} className="text-blue-500 dark:text-lime-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white">Customizable Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Personalize your profile with custom themes, colors, and layouts to match your brand.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon icon={faChartLine} className="text-blue-500 dark:text-lime-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white">Analytics Built-in</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Track visits and engagement with detailed analytics to optimize your online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Linkarooie Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Support Linkarooie</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Help us grow by supporting our open-source project!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/loftwah/linkarooie-2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition duration-300 shadow-md"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                <span className="ml-2">Star on GitHub</span>
              </a>
              <a
                href="https://github.com/loftwah/linkarooie-2/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 dark:bg-lime-500 dark:hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition duration-300 shadow-md"
              >
                <FontAwesomeIcon icon={faCodeBranch} className="text-xl" />
                <span className="ml-2">Fork the Project</span>
              </a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400">
          <div className="max-w-5xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Linkarooie. Open source under MIT license.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://github.com/loftwah/linkarooie-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;