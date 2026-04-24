import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const streetphotography3 = () => {
  return (
    <Layout>
      <div
        style={{
          background: `transparent`,
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
        <div className="album-card">
          <Link to="street-food-stalls-fukuoka-2025/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Fukuoka 🇯🇵 2025</h4></span>
            <StaticImage src="../../static/streetphotography3/street-food-stalls-fukuoka-2025/1.jpg" alt="Street food stalls, Fukuoka 🇯🇵 2025"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="album-card">
          <Link to="night-in-barcelona-2026/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Night in Barcelona 🇪🇸 2026</h4></span>
            <StaticImage src="../../static/streetphotography3/night-in-barcelona-2026/1.jpg" alt="Night in Barcelona 🇪🇸 2026"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="album-card">
          <Link to="ucla-bruin-day-2026/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>UCLA Bruin Day 🐻 2026</h4></span>
            <StaticImage src="../../static/streetphotography3/ucla-bruin-day-2026/1.jpg" alt="UCLA Bruin Day 🐻 2026"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </AlbumGrid>
      {/*===========3SET=========*/}
      <AlbumGrid>
        <div className="album-card">
          <Link to="los-angeles-april-2026/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Los Angeles 🇺🇸 April 2026</h4></span>
            <StaticImage src="../../static/streetphotography3/los-angeles-april-2026/1.jpg" alt="Los Angeles 🇺🇸 April 2026"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div />
        <div />
      </AlbumGrid>
      <Link to="../streetphotography/" style={{ fontSize: `0.85rem` }}>{"< "}back to 📸 Album 1</Link>
      <br />
      <Link to="../streetphotography2/" style={{ fontSize: `0.85rem` }}>{"< "}back to 📸 Album 2</Link>
      <br />
      <br />
    </Layout>
  )
}
export default streetphotography3

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
