import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const night_in_barcelona_2026 = () => {
  const response = [
    "../night-in-barcelona-2026/1.jpg",
    "../night-in-barcelona-2026/2.jpg",
    "../night-in-barcelona-2026/3.jpg",
    "../night-in-barcelona-2026/4.jpg",
    "../night-in-barcelona-2026/5.jpg",
    "../night-in-barcelona-2026/6.jpg",
    "../night-in-barcelona-2026/7.jpg",
    "../night-in-barcelona-2026/8.jpg",
    "../night-in-barcelona-2026/9.jpg",
    "../night-in-barcelona-2026/10.jpg",
    "../night-in-barcelona-2026/11.jpg",
    "../night-in-barcelona-2026/12.jpg",
    "../night-in-barcelona-2026/13.jpg",
    "../night-in-barcelona-2026/14.jpg",
    "../night-in-barcelona-2026/15.jpg",
    "../night-in-barcelona-2026/16.jpg",
  ]

  const images = response.map(url => ({
    original: `${url}`,
    thumbnail: `${url}`,
  }))

  return (
    <Layout>
      <div
        style={{
          background: `white`,
          marginBottom: `1rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
        <Link to="../../streetphotography3/" style={{ fontSize: `1rem` }}> | Album 3</Link>
      </div>
      <h4>Night in Barcelona 🇪🇸 2026 | 📸 Leica Q3-28</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default night_in_barcelona_2026

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
