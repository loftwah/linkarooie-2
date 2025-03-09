import React from 'react'
import ReactDOM from 'react-dom/client'
import posthog from 'posthog-js'

// Import styles first
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './App.tsx'

// Initialize PostHog
const posthogKey = import.meta.env.VITE_POSTHOG_KEY || 'phc_your_project_api_key'
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

// Filter out bots and search engines
const userAgent = window.navigator.userAgent.toLowerCase()
const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)

if (!isBot) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    capture_pageview: false, // We'll handle pageviews manually for better control
    autocapture: true,
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
