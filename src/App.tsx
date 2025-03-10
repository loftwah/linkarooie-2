import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import './index.css';

// Pages
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import NotFoundPage from './pages/NotFoundPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Check for user's preference in local storage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply the dark mode class to the document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save the preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Make the toggle function available globally
  // Note: In a real app, use a proper context instead
  React.useEffect(() => {
    // Using as a workaround for TypeScript window property
    (window as any).toggleTheme = () => setIsDarkMode(!isDarkMode);
    
    return () => {
      delete (window as any).toggleTheme;
    };
  }, [isDarkMode]);

  return (
    <PostHogProvider client={posthog}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-foreground dark:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/:username" element={<ProfilePage />} />
              <Route path="/:username/analytics" element={<AnalyticsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PostHogProvider>
  );
};

export default App;
