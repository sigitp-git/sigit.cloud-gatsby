import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"

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
      <div
        style={{
          background: `white`,
          marginBottom: `0rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
      </div>
      {/*===========3SET=========*/}
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
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
      </div>
      {/*===========3SET=========*/}
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
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
      </div>
      {/*placeholder*/}
      {/* <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
        <div>
          <Link to="seattle2021/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>Seattle 2021</h4></span>
            <StaticImage src="../../static/streetphotography/seattle2021/5.jpeg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link></div>
        <div>
          <Link to="newyork2021/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>New York 2021</h4></span>
            <StaticImage src="../../static/streetphotography/newyork2021/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="newyork2021/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h4>New York 2021</h4></span>
            <StaticImage src="../../static/streetphotography/newyork2021/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </div> */}
      <Link to="../streetphotography2/" style={{ fontSize: `1rem` }}>{">> "}go to 📸 Album 2</Link>
      <br />
      <br />
    </Layout>
  )
}
// update: multi-album
export default streetPhotography