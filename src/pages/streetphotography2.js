import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const streetPhotography2 = () => {
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
          <Link to="fushimi2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Fushimi 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography2/japan2023-fushimi/1.jpg" alt="Fushimi Inari 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="yosakoi2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Sapporo 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography2/japan2023-yosakoi/1.jpg" alt="Yosakoi Sapporo 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="shibuya2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Shibuya 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography2/japan2023-shibuya/1.jpg" alt="Shibuya 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </AlbumGrid>
      {/*===========3SET=========*/}
      <AlbumGrid>
        <div className="blog-list">
          <Link to="seattle2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 2023</h4></span>
            <StaticImage src="../../static/streetphotography2/seattle2023-ricohgriiix/1.jpg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="seattle2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 2021</h4></span>
            <StaticImage src="../../static/streetphotography2/seattle2021-leicaq/5.jpeg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="newyork2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>New York 🇺🇸 2021</h4></span>
            <StaticImage src="../../static/streetphotography2/newyork2021-leicaq/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </AlbumGrid>
      {/*===========3SET=========*/}
      <AlbumGrid>
        <div className="blog-list">
          <Link to="summer-in-vietnam-2024/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Summer in Vietnam 🇻🇳 2024</h4></span>
            <img src="../../streetphotography2/summer-in-vietnam-2024/1.jpg" alt="Summer in Vietnam 🇻🇳 2024"
              width={300} height={300} style={{ objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="labuan-bajo-east-nusa-tenggara-2024/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Labuan Bajo 🇮🇩 2024</h4></span>
            <img src="../../streetphotography2/labuan-bajo-east-nusa-tenggara-2024/1.jpg" alt="Labuan Bajo, East Nusa Tenggara 🇮🇩 2024"
              width={300} height={300} style={{ objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="rainy-day-in-paris-2025/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Rainy day in Paris 🇫🇷 2025</h4></span>
            <img src="../../streetphotography2/rainy-day-in-paris-2025/1.jpg" alt="Rainy day in Paris 🇫🇷 2025"
              width={300} height={300} style={{ objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>
      </AlbumGrid>
      <Link to="../streetphotography/" style={{ fontSize: `0.85rem` }}>{"< "}back to 📸 Album 1</Link>
      <br />
      <Link to="../streetphotography3/" style={{ fontSize: `0.85rem` }}>{"> "}go to 📸 Album 3</Link>
      <br />
      <br />
    </Layout>
  )
}
// update: multi-album
export default streetPhotography2

export function Head() {
  return (
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
  )
}
