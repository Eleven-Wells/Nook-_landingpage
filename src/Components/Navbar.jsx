import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">NOOK</Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/write">Write</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
          <li><Link to="/earnings">Earnings</Link></li>
        </ul>

        <div className="navbar-auth">
          <Link to="/login" className="login-btn">Log in</Link>
          <Link to="/get-started" className="started-btn">Get Started</Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar