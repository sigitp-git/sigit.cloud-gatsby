import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"

const streetPhotography2 = () => {
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
      <div
        style={{
          background: `white`,
          marginBottom: `1rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
      </div>
      {/*===========3SET=========*/}
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
        <div>
          <Link to="seattle2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 2023</h4></span>
            <StaticImage src="../../static/streetphotography2/seattle2023-ricohgriiix/1.jpg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="seattle2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 2021</h4></span>
            <StaticImage src="../../static/streetphotography2/seattle2021-leicaq/5.jpeg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="newyork2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>New York 🇺🇸 2021</h4></span>
            <StaticImage src="../../static/streetphotography2/newyork2021-leicaq/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </div>
      <Link to="../streetphotography/" style={{ fontSize: `1rem` }}>{"<< "}back to 📸 Album 1</Link>
      <br />
      <br />
    </Layout>
  )
}
// update: multi-album
export default streetPhotography2