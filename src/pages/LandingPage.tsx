import React from 'react';
import Directory from '../components/Directory';
import { profiles } from '../data/profiles';
import heroImage from '../assets/images/judgemental_linkarooie.jpg';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center py-16 bg-gray-800 w-full px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-lime-200 mb-6">Linkarooie</h1>
          <img
            src={heroImage}
            alt="Linkarooie"
            className="w-1/3 max-w-xs mx-auto mb-8 rounded-lg shadow-md"
          />
          <p className="text-xl text-white max-w-2xl mx-auto">
            Simplify your online presence with a single, customizable link.
          </p>
        </div>
      </section>

      {/* Profile Directory Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Explore Profiles</h2>
        <div className="max-w-5xl mx-auto">
          <Directory profiles={profiles} />
        </div>
      </section>

      {/* Support Linkarooie Section */}
      <section className="py-16 px-4 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Support Linkarooie</h2>
        <p className="text-lg text-gray-400 mb-8">
          Help us grow by supporting our open-source project!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/loftwah/linkarooie-2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2 transition duration-300"
          >
            <i className="fab fa-github"></i>
            <span>Star on GitHub</span>
          </a>
          <a
            href="https://github.com/loftwah/linkarooie-2/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2 transition duration-300"
          >
            <i className="fas fa-code-branch"></i>
            <span>Fork the Project</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;