import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Dynamically import pages for code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AnalyticsPage = lazy(() => import('./pages/Analytics'));
// Create a simple NotFound component since it doesn't exist
const NotFound = lazy(() => Promise.resolve({
  default: () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>
      <a href="/" className="px-4 py-2 bg-blue-500 dark:bg-lime-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-lime-600 transition-colors">
        Go Home
      </a>
    </div>
  )
}));

// Create a ProfileWrapper component to fetch and pass the profile data
const ProfileWrapper = lazy(() => import('./pages/ProfilePage'));

function App(): React.ReactElement {
  // Detect if we're on GitHub Pages and use the correct base path
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basename = '';

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:username" element={<ProfileWrapper />} />
            <Route path="/:username/analytics" element={<AnalyticsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;