import { useEffect } from 'react';
import Directory from '../components/Directory';
import profiles from '../data/profiles';
import { trackDirectoryView } from '../utils/analytics';
import judgemental from '../assets/images/judgemental_linkarooie.jpg';

const LandingPage = () => {
  // Track page view
  useEffect(() => {
    trackDirectoryView();
  }, []);

  // Convert object of profiles to array
  const profilesArray = Object.values(profiles);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Linkarooie</h1>
            <p className="text-xl mb-6">
              A beautiful way to share your links and achievements with the world.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={judgemental} 
              alt="Linkarooie" 
              className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Directory Section */}
      <Directory profiles={profilesArray} />
    </div>
  );
};

export default LandingPage; 