import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center w-full">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Linkarooie. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 