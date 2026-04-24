/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 720,
          padding: `0 1.0875rem 2rem`,
        }}
      >
        <main>{children}</main>
        <hr />
        <footer style={{ 
          paddingTop: `1.5rem`,
          fontSize: `0.85rem`,
          color: `#888`,
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          alignItems: `center`,
          gap: `0.5rem`,
        }}>
          <div>
            <Link to="/" className="nav-link">Home</Link>
            {` · `}
            <Link to="/about/" className="nav-link">About</Link>
            {` · `}
            <Link to="/gallery/" className="nav-link">Gallery</Link>
            {` · `}
            <Link to="/streetphotography/" className="nav-link">Street 📸</Link>
            {` · `}
            <Link to="/disclaimer/" className="nav-link">Disclaimer</Link>
          </div>
          <div>
            © {new Date().getFullYear()}{" "}
            <a href="https://aws.amazon.com/serverless/" target="_blank" rel="noopener noreferrer" className="nav-link">#serverless</a>
            {` · `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer" className="nav-link">Gatsby</a>
            {` · `}
            <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer" className="nav-link">Amplify</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
