import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const streetPhotography3 = () => {
  return (
    <Layout>
      <div
        style={{
          background: `white`,
          marginBottom: `0rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
        <Link to="../streetphotography3/" style={{ fontSize: `1rem` }}> | Album 3</Link>
      </div>
      {/*===========3SET=========*/}
      <AlbumGrid>
        <div className="blog-list">
          <Link to="summer-in-vietnam-2024/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Summer in Vietnam 🇻🇳 2024</h4></span>
            <img src="../../streetphotography3/summer-in-vietnam-2024/1.jpg" alt="Summer in Vietnam 🇻🇳 2024"
              style={{ width: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
      </AlbumGrid>
      <Link to="../streetphotography/" style={{ fontSize: `1rem` }}>{"<< "}back to 📸 Album 1</Link>
      <br />
      <Link to="../streetphotography2/" style={{ fontSize: `1rem` }}>{"<< "}back to 📸 Album 2</Link>
      <br />
      <br />
    </Layout>
  )
}
export default streetPhotography3

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[
        `sigit`,
        `priyanggoro`,
        `street photography`,
        `leica`,
        `fujifilm`,
      ]}
    />
  )
}
