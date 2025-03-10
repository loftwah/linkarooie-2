import React from 'react'
import loftwahBanner from '../assets/images/loftwah_banner.jpg'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img src={loftwahBanner} alt="Banner" className="w-full max-w-4xl h-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Linkarooie</h1>
      <p className="text-xl text-gray-600 max-w-2xl text-center">
        Share your links, track your shit, and look good doing it.
      </p>
    </div>
  )
}

export default LandingPage