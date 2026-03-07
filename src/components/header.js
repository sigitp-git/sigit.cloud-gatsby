import { Link } from "gatsby"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle = '' }) => (
  <section>
    <header
      style={{
        // background: `inherit`,
        background: `var(--headerColor)`,
        marginBottom: `0`,
        border: `1px solid var(--headerColor)`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link to="/" style={{ fontSize: `2.5rem` }}>
          <span className="blog-header">{siteTitle}</span>
        </Link>
      </div>
    </header>
    <div
      style={{
        background: `var(--headerSubLinkBG)`,
        marginBottom: `1rem`,
        border: `1px hidden var(--headerSubLinkBG)`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 1.0875rem`,
        }}
      >
        <Link to="/about/" style={{ fontSize: `1.5rem` }} aria-label="about page">
          <small className="blog-subheader">about</small>
        </Link>
        {` `}
        <Link to="/gallery/" style={{ marginLeft: `2rem`, fontSize: `1.5rem` }} aria-label="gallery page">
          <small className="blog-subheader">gallery</small>
        </Link>
        {` `}
        <Link
          to="/streetphotography/"
          style={{ marginLeft: `2rem`, fontSize: `1.5rem` }}
          activeClassName="active"
          partiallyActive={true}
          aria-label="street photography page"
        >
          <small className="blog-subheader">street 📸</small>
        </Link>
        {/*<Link
          to="/disclaimer/"
          style={{ marginLeft: `2rem`, fontSize: `1.5rem` }}
        >
          <small className="blog-subheader">disclaimer</small>
        </Link> */}
      </div>
    </div>
  </section>
)

export default Header
