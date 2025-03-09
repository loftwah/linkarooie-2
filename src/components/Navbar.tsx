import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Linkarooie</Link>
      </div>
      <ul className="flex space-x-8 list-none">
        <li><Link to="/" className="text-lg hover:underline">Home</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar 