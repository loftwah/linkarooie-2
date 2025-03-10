import React from 'react';
import Directory from '../components/Directory';
import { profiles } from '../data/profiles';
import heroImage from '../assets/images/judgemental_linkarooie.jpg';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="flex flex-col items-center py-16 bg-gray-800 w-full px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-lime-200 mb-4">Linkarooie</h1>
          <img src={heroImage} alt="Linkarooie" className="w-1/2 mx-auto mb-8" />
          <p className="text-xl text-gray-400">Simplify your online presence with a single, customizable link.</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Profiles</h2>
        <Directory profiles={profiles} />
      </section>
    </div>
  );
};

export default LandingPage;