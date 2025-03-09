import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../types';

interface DirectoryProps {
  profiles: Profile[];
}

const Directory: React.FC<DirectoryProps> = ({ profiles }) => {
  const [users, setUsers] = useState(profiles);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // In a real app, this would fetch from an API
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setUsers(profiles);
        setIsLoading(false);
      }, 500);
    };

    fetchUsers();
  }, [profiles]);

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Directory</h1>
        <p className="text-xl text-gray-600">Discover and connect with Linkarooie users</p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading users...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <Link to={`/${user.handle}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" key={user.handle}>
                <div className="relative">
                  <img src={user.bannerUrl} alt={`${user.name}'s banner`} className="w-full h-32 object-cover" />
                  <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                    <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full border-4 border-white object-cover" />
                  </div>
                </div>
                <div className="pt-10 p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-gray-500">@{user.handle}</p>
                  <p className="mt-2 text-gray-600 line-clamp-2">{user.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {user.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
                    ))}
                    {user.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">+{user.tags.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-primary font-medium">View Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 mb-4">No users found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">Clear Search</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Directory; 