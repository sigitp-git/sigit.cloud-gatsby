import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const streetPhotography = () => {
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
          <Link to="london2023fujixt5/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>London 🇩🇬 2023</h4></span>
            <StaticImage src="../../static/streetphotography/london2023-fujixt5/1.jpg" alt="London 🇩🇬 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="london2023ctm10r/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>London CT 🇩🇬 2023</h4></span>
            <StaticImage src="../../static/streetphotography/london2023-ct-leicam10r/1.jpg" alt="Strøget 🇩🇰 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="seattle2023m10r/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 Summer'23</h4></span>
            <StaticImage src="../../static/streetphotography/seattle2023-leicam10r/8.jpg" alt="Seattle 🇺🇸 Summer'23"
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
          <Link to="nyhavn2023m10r/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Nyhavn 🇩🇰 2023</h4></span>
            <StaticImage src="../../static/streetphotography/denmark2023-nyhavn/1.jpg" alt="Nyhavn 🇩🇰 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="stroget2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Strøget 🇩🇰 2023</h4></span>
            <StaticImage src="../../static/streetphotography/denmark2023-stroget/1.jpg" alt="Strøget 🇩🇰 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="seattle2023m10r/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 🇺🇸 Summer'23</h4></span>
            <StaticImage src="../../static/streetphotography/seattle2023-leicam10r/1.jpg" alt="Seattle 🇺🇸 Summer'23"
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
          <Link to="tokyo2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Tokyo 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography/japan2023-tokyo-jr/1.jpg" alt="Tokyo 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="kyoto2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Kyoto 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography/japan2023-kyoto/1.jpg" alt="Kyoto 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div className="blog-list">
          <Link to="tsukiji2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Tsukiji 🇯🇵 2023</h4></span>
            <StaticImage src="../../static/streetphotography/japan2023-tsukiji/1.jpg" alt="Tsukiji 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </AlbumGrid>
      <Link to="../streetphotography2/" style={{ fontSize: `0.85rem` }}>{"> "}go to 📸 Album 2</Link>
      <br />
      <Link to="../streetphotography3/" style={{ fontSize: `0.85rem` }}>{"> "}go to 📸 Album 3</Link>
      <br />
      <br />
    </Layout>
  )
}
// update: multi-album
export default streetPhotography

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
