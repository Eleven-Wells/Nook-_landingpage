import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">NOOK</div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/write">Write</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/how-it-works">How it works</a></li>
          <li><a href="/earnings">Earnings</a></li>
        </ul>

        <div className="navbar-auth">
          <a href="/login" className="login-btn">Log in</a>
          <a href="/get-started" className="started-btn">Get Started</a>
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