import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  // Toggle mobile menu open/closed
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Wyreflow
        </Link>

        {/* Desktop nav - visible from 768px up */}
        <nav className="nav-desktop">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger - only visible on mobile */}
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile nav - vertical list when open */}
        <nav className={`nav-mobile ${menuOpen ? '' : 'collapsed'}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
