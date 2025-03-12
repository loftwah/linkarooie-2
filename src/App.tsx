import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
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