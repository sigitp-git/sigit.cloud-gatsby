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
        marginLeft: `18rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Link to="/" style={{ color: `white`, textDecoration: `none`}}>sigit.cloud</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/about/" style={{ color: `white`, textDecoration: `none`}}><small>about</small></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/disclaimer/" style={{ color: `white`, textDecoration: `none`}}><small>disclaimer</small></Link>
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
