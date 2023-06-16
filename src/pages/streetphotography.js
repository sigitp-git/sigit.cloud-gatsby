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
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
        <div>
          <Link to="kyoto2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Kyoto 🇯🇵 2023</h3></span>
            <StaticImage src="../../static/streetphotography/japan2023-kyoto/1.jpg" alt="Kyoto 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="tsukiji2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Tsukiji 🇯🇵 2023</h3></span>
            <StaticImage src="../../static/streetphotography/japan2023-tsukiji/1.jpg" alt="Tsukiji 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="fushimi2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Fushimi 🇯🇵 2023</h3></span>
            <StaticImage src="../../static/streetphotography/japan2023-fushimi/1.jpg" alt="Fushimi Inari 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </div>
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
        <div>
          <Link to="yosakoi2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Sapporo 🇯🇵 2023</h3></span>
            <StaticImage src="../../static/streetphotography/japan2023-yosakoi/1.jpg" alt="Yosakoi Sapporo 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="shibuya2023fuji/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Shibuya 🇯🇵 2023</h3></span>
            <StaticImage src="../../static/streetphotography/japan2023-shibuya/1.jpg" alt="Shibuya 🇯🇵 2023"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="seattle2023rch/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Seattle 🇺🇸 2023</h3></span>
            <StaticImage src="../../static/streetphotography/seattle2023-ricohgriiix/1.jpg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </div>
      <div class="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
      <div>
          <Link to="seattle2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>Seattle 🇺🇸 2021</h3></span>
            <StaticImage src="../../static/streetphotography/seattle2021-leicaq/5.jpeg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="newyork2021lq/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>New York 🇺🇸 2021</h3></span>
            <StaticImage src="../../static/streetphotography/newyork2021-leicaq/1.jpeg" alt="New York"
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
            <span className="footer-links"><h3>Seattle 2021</h3></span>
            <StaticImage src="../../static/streetphotography/seattle2021/5.jpeg" alt="Seattle"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link></div>
        <div>
          <Link to="newyork2021/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>New York 2021</h3></span>
            <StaticImage src="../../static/streetphotography/newyork2021/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
        <div>
          <Link to="newyork2021/" style={{ fontSize: `1rem` }}>
            <span className="footer-links"><h3>New York 2021</h3></span>
            <StaticImage src="../../static/streetphotography/newyork2021/1.jpeg" alt="New York"
              placeholder="blurred"
              layout="constrained"
              width={300}
              height={300} />
          </Link>
        </div>
      </div> */}
    </Layout>
  )
}
// update: multi-album
export default streetPhotography