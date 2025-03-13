import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';

// Component to handle redirects from 404.html
const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      // Remove the item so we don't redirect again
      sessionStorage.removeItem('redirectPath');
      // Navigate to the stored path
      navigate(redirectPath);
    }
  }, [navigate]);

  return null;
};

function App(): React.ReactElement {
  // Detect if we're on GitHub Pages and use the correct base path
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basename = isGitHubPages ? '/linkarooie-2' : '';

  return (
    <Router basename={basename}>
      <RedirectHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/:username/analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">404 - Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;