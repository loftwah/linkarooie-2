import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Directory.css';
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
    <div className="directory-container">
      <div className="directory-header">
        <h1>Directory</h1>
        <p>Discover and connect with Linkarooie users</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading users...</p>
        </div>
      ) : (
        <div className="users-grid">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <Link to={`/${user.handle}`} className="user-card" key={user.handle}>
                <div className="user-banner-container">
                  <img src={user.bannerUrl} alt={`${user.name}'s banner`} className="user-banner" />
                  <div className="user-avatar-overlay">
                    <img src={user.avatarUrl} alt={user.name} className="user-avatar" />
                  </div>
                </div>
                <div className="user-info">
                  <h3 className="user-name">{user.name}</h3>
                  <p className="user-username">@{user.handle}</p>
                  <p className="user-bio">{user.description}</p>
                  <div className="user-tags">
                    {user.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="user-tag">{tag}</span>
                    ))}
                    {user.tags.length > 3 && (
                      <span className="user-tag-more">+{user.tags.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="view-profile">
                  <span>View Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No users found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="clear-search">Clear Search</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Directory; 