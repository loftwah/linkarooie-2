import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/:username/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;