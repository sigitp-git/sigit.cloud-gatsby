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
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <hr/>
        <footer>
          <Link to="/">Home</Link>{` `}
          <Link to="/about/">About</Link>{` `}
          <Link to="/disclaimer/">Disclaimer</Link>{` `}
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          {` `}
          <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">Amplify</a>
          {` `}
          <a href="https://aws.amazon.com/appsync/" target="_blank" rel="noopener noreferrer">AppSync</a>
          {` `}
          <span style={{'color': 'darkslateblue'}}>#darkslateblue</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
