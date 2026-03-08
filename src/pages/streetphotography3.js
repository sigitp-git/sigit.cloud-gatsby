import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const streetphotography3 = () => {
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
            <span className="footer-links"><h4 style={{ minHeight: "2.4em", lineHeight: "1.2em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Summer in Vietnam 2024</h4></span>
            <img src="../../streetphotography3/summer-in-vietnam-2024/1.jpg" alt="Summer in Vietnam 2024"
              style={{ width: "100%", maxWidth: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="labuan-bajo-east-nusa-tenggara-2024/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4 style={{ minHeight: "2.4em", lineHeight: "1.2em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Labuan Bajo, East Nusa Tenggara 🇮🇩 2024</h4></span>
            <img src="../../streetphotography3/labuan-bajo-east-nusa-tenggara-2024/1.jpg" alt="Labuan Bajo, East Nusa Tenggara 🇮🇩 2024"
              style={{ width: "100%", maxWidth: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="rainy-day-in-paris-2025/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4 style={{ minHeight: "2.4em", lineHeight: "1.2em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Rainy day in Paris 🇫🇷 2025</h4></span>
            <img src="../../streetphotography3/rainy-day-in-paris-2025/1.jpg" alt="Rainy day in Paris 🇫🇷 2025"
              style={{ width: "100%", maxWidth: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
      </AlbumGrid>
      {/*===========3SET=========*/}
      <AlbumGrid>
        <div className="blog-list">
          <Link to="street-food-stalls-fukuoka-2025/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4 style={{ minHeight: "2.4em", lineHeight: "1.2em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Street food stalls, Fukuoka 🇯🇵 2025</h4></span>
            <img src="../../streetphotography3/street-food-stalls-fukuoka-2025/1.jpg" alt="Street food stalls, Fukuoka 🇯🇵 2025"
              style={{ width: "100%", maxWidth: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="night-in-barcelona-2026/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4 style={{ minHeight: "2.4em", lineHeight: "1.2em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Night in Barcelona 🇪🇸 2026</h4></span>
            <img src="../../streetphotography3/night-in-barcelona-2026/1.jpg" alt="Night in Barcelona 🇪🇸 2026"
              style={{ width: "100%", maxWidth: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
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
export default streetphotography3

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
