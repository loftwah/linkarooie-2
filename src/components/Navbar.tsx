import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 bg-background dark:bg-gray-900 text-foreground dark:text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Linkarooie</Link>
      </div>
      <ul className="flex space-x-4 sm:space-x-8 list-none">
        <li><Link to="/" className="text-lg hover:bg-muted/20 dark:hover:bg-muted/40 p-1 rounded">Home</Link></li>
        <li><Link to="/dashboard" className="text-lg hover:bg-muted/20 dark:hover:bg-muted/40 p-1 rounded">Dashboard</Link></li>
        <li><Link to="/profile" className="text-lg hover:bg-muted/20 dark:hover:bg-muted/40 p-1 rounded">Profile</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  )
}

export default Navbar 