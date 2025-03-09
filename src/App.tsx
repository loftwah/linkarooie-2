import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import './index.css';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';
import NotFoundPage from './pages/NotFoundPage';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <PostHogProvider client={posthog}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/:username" element={<ProfilePage />} />
              <Route path="/:username/analytics" element={<AnalyticsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </PostHogProvider>
  );
};

export default App;
