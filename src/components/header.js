import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./theme-toggle"
import "./layout.css"

const Header = ({ siteTitle = '' }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 720,
      padding: `1.5rem 1.0875rem`,
    }}
  >
    <header
      style={{
        background: `var(--accentColor)`,
        borderRadius: `8px`,
        padding: `2rem 1.5rem`,
        display: `flex`,
        flexDirection: `column`,
        gap: `0.8rem`,
        marginBottom: `1.5rem`,
      }}
    >
      <Link to="/" style={{ textDecoration: `none` }}>
        <span style={{
          fontSize: `2rem`,
          fontWeight: `700`,
          color: `#fff`,
          letterSpacing: `-0.02em`,
        }}>
          {siteTitle}
        </span>
      </Link>
      <nav style={{ display: `flex`, gap: `1.5rem`, alignItems: `center`, flexWrap: `wrap` }}>
        <Link to="/about/" className="nav-link" style={{ fontSize: `0.95rem`, color: `rgba(255,255,255,0.85)` }} aria-label="about page">about</Link>
        <Link to="/gallery/" className="nav-link" style={{ fontSize: `0.95rem`, color: `rgba(255,255,255,0.85)` }} aria-label="gallery page">gallery</Link>
        <Link to="/streetphotography/" className="nav-link" style={{ fontSize: `0.95rem`, color: `rgba(255,255,255,0.85)` }} aria-label="street photography page">street 📸</Link>
        <span style={{ marginLeft: `auto` }}><ThemeToggle /></span>
      </nav>
    </header>
  </div>
)

export default Header
