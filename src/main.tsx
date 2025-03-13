import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './utils/fontawesome';
import App from './App.tsx';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: import.meta.env.POSTHOG_HOST || 'https://us.i.posthog.com',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
);