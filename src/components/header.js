import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `inherit`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Link to="/">{siteTitle}</Link><br/>
    <Link to="/about/" style={{ fontSize: `1.5rem` }}><small>about</small></Link>{` | `}
    <Link to="/gallery/" style={{ fontSize: `1.5rem` }}><small>gallery</small></Link>{` | `}
    <Link to="/disclaimer/" style={{ fontSize: `1.5rem` }}><small>disclaimer</small></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
