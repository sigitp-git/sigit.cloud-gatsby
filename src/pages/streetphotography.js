import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const streetPhotography = () => {
  return (
    <Layout>
      <SEO
        title="Street Photography"
        keywords={[
          `sigit`,
          `priyanggoro`,
          `sigit priyanggoro`,
          `aws`,
          `severless`,
          `amplify`,
          `appsync`,
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `reactjs`,
          `street photography`,
          `leica`,
          `leica q`,
          `leica street photography`,
        ]}
      />
      <Link to="seattle2021/" style={{ fontSize: `1.2rem` }}>
        <span className="footer-links">Seattle 2021 | </span>
      </Link>
      <Link to="newyork2021/" style={{ fontSize: `1.2rem` }}>
        <span className="footer-links">New York 2021</span>
      </Link>
    </Layout>
  )
}
export default streetPhotography