import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkslateblue`,
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
    <Link to="/" style={{ color: `white`, textDecoration: `none`}}>sigit.cloud</Link><br/>
    <Link to="/about/" style={{ fontSize: `1.5rem`, color: `white`, textDecoration: `none`}}><small>about</small></Link><span style={{ fontSize: `1.2rem`, color: `white`, textDecoration: `none`}}> | </span>
    <Link to="/disclaimer/" style={{ fontSize: `1.5rem`, color: `white`, textDecoration: `none`}}><small>disclaimer</small></Link>
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
