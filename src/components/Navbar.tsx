import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Linkarooie</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar 