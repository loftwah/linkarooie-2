import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaGlobe, FaAward, FaCode, FaMusic, FaGamepad } from 'react-icons/fa';
import { SiHashnode, SiDevdotto } from 'react-icons/si';
import { Metadata } from 'next';

// Import images directly
import bannerImage from '../../assets/images/loftwah_banner.jpg';
import profileImage from '../../assets/images/loftwah_avatar.jpg';
import linkarooieImage from '../../assets/images/judgemental_linkarooie.jpg';

export const metadata: Metadata = {
  title: 'Dean Lofts (loftwah) - DevOps Engineer & Open Source Contributor',
  description: 'Profile of Dean Lofts (loftwah), a DevOps Engineer and Open Source Contributor based in Australia.',
};

const LoftwahProfile = () => {
  // Hidden content (will be shown in console only)
  useEffect(() => {
    console.log('🕵️‍♂️ You found the hidden content! Dean is currently working on a secret project involving AI and blockchain.');
  }, []);
  
  // Set document title
  useEffect(() => {
    document.title = 'Dean Lofts (loftwah) - DevOps Engineer & Open Source Contributor';
  }, []);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header/Banner */}
          <div className="relative h-64">
            <img 
              src={bannerImage} 
              alt="Profile banner" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row -mt-20 px-4 md:px-10">
            <div className="w-40 h-40 md:mr-6 relative">
              <img 
                src={profileImage} 
                alt="Dean Lofts" 
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            <div className="flex-1 mt-20 md:mt-0">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Dean Lofts (loftwah)</h1>
                  <p className="text-gray-600">DevOps Engineer & Open Source Contributor</p>
                  <p className="text-gray-500">Brisbane, Australia</p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <a href="https://github.com/sponsors/loftwah" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg inline-block">
                    Sponsor Me
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex mt-4 space-x-4">
                <a href="https://github.com/loftwah" className="text-gray-700 hover:text-black" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="https://twitter.com/loftwah" className="text-gray-700 hover:text-blue-400" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com/in/deanlofts" className="text-gray-700 hover:text-blue-700" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://loftwah.hashnode.dev" className="text-gray-700 hover:text-blue-600" aria-label="Hashnode">
                  <SiHashnode size={24} />
                </a>
                <a href="https://dev.to/loftwah" className="text-gray-700 hover:text-black" aria-label="Dev.to">
                  <SiDevdotto size={24} />
                </a>
                <a href="https://loftwah.medium.com" className="text-gray-700 hover:text-black" aria-label="Medium">
                  <FaGlobe size={24} />
                </a>
                <a href="mailto:dean@deanlofts.xyz" className="text-gray-700 hover:text-red-500" aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="px-4 md:px-10 py-6">
            <h2 className="text-2xl font-bold border-b pb-2">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I'm a DevOps Engineer with over 10 years of experience in the tech industry. I specialize in cloud infrastructure, 
              CI/CD pipelines, and containerization. I'm passionate about automation, open source, and teaching others about technology.
              When I'm not coding, I enjoy making music, gaming, and exploring the great outdoors.
            </p>
          </div>
          
          {/* Skills Section */}
          <div className="px-4 md:px-10 py-6">
            <h2 className="text-2xl font-bold border-b pb-2">Skills</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Python', 'Bash', 'Linux', 'Monitoring', 'Security'].map((skill) => (
                <div key={skill} className="bg-gray-100 rounded-lg px-3 py-2 text-center hover:bg-gray-200 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="px-4 md:px-10 py-6">
            <h2 className="text-2xl font-bold border-b pb-2">Featured Projects</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={linkarooieImage} 
                    alt="DevOps Toolkit" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">DevOps Toolkit</h3>
                  <p className="text-gray-600 mt-2">A collection of scripts and tools for DevOps engineers to automate common tasks.</p>
                  <a href="https://github.com/loftwah/linux-for-pirates" className="mt-3 inline-block text-blue-600 hover:text-blue-800">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={bannerImage} 
                    alt="Serverless API" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Serverless API Framework</h3>
                  <p className="text-gray-600 mt-2">A framework for quickly deploying serverless APIs with authentication and monitoring.</p>
                  <a href="https://github.com/loftwah/m3-fresh-install" className="mt-3 inline-block text-blue-600 hover:text-blue-800">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="px-4 md:px-10 py-6">
            <h2 className="text-2xl font-bold border-b pb-2">Achievements</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaAward className="text-yellow-500 h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">GitHub Star</h3>
                  <p className="text-gray-600">Recognized as a valuable contributor to the GitHub community</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaCode className="text-blue-500 h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">100+ Open Source Contributions</h3>
                  <p className="text-gray-600">Contributed to over 100 open source projects across GitHub</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMusic className="text-purple-500 h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Music Producer</h3>
                  <p className="text-gray-600">Released multiple albums on various streaming platforms</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaGamepad className="text-green-500 h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Game Development</h3>
                  <p className="text-gray-600">Developed indie games and game modifications</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="px-4 md:px-10 py-8 bg-gray-50">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Let's Connect!</h2>
              <p className="text-gray-600 mt-2">Feel free to reach out for collaborations or just to say hi.</p>
              <div className="mt-4">
                <a href="mailto:dean@deanlofts.xyz" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg inline-block transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Analytics Link */}
          <div className="px-4 md:px-10 py-4 bg-gray-100 text-center">
            <Link to="/loftwah/analytics" className="text-sm text-gray-500 hover:text-gray-700">
              View Profile Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoftwahProfile; 