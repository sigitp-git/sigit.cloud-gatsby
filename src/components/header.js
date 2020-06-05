import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <section>
    <header
      style={{
        // background: `inherit`,
        background: `var(--headerColor)`,
        marginBottom: `0`,
        border: `1px solid #423e47`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{ fontSize: `2.5rem`, color: `var(--headerTitleColor)` }}
        >
          <span className="blog-header">{siteTitle}</span>
        </Link>
      </div>
    </header>
    <div
      style={{
        background: `var(--headerSubLinkBG)`,
        marginBottom: `1rem`,
        border: `1px hidden #423e47`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 1.0875rem`,
        }}
      >
        <Link to="/about/" style={{ fontSize: `1.5rem` }}>
          <small>about</small>
        </Link>
        {` `}
        <Link to="/gallery/" style={{ marginLeft: `2rem`, fontSize: `1.5rem` }}>
          <small>gallery</small>
        </Link>
        {` `}
        <Link
          to="/disclaimer/"
          style={{ marginLeft: `2rem`, fontSize: `1.5rem` }}
        >
          <small>disclaimer</small>
        </Link>
      </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
