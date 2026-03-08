import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const rainy_day_in_paris_2025 = () => {
  const response = [
    "../rainy-day-in-paris-2025/1.jpg",
    "../rainy-day-in-paris-2025/2.jpg",
    "../rainy-day-in-paris-2025/3.jpg",
    "../rainy-day-in-paris-2025/4.jpg",
    "../rainy-day-in-paris-2025/5.jpg",
    "../rainy-day-in-paris-2025/6.jpg",
    "../rainy-day-in-paris-2025/7.jpg",
    "../rainy-day-in-paris-2025/8.jpg",
    "../rainy-day-in-paris-2025/9.jpg",
    "../rainy-day-in-paris-2025/10.jpg",
    "../rainy-day-in-paris-2025/11.jpg",
    "../rainy-day-in-paris-2025/12.jpg",
    "../rainy-day-in-paris-2025/13.jpg",
    "../rainy-day-in-paris-2025/14.jpg",
    "../rainy-day-in-paris-2025/15.jpg",
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
      <h4>Rainy day in Paris 🇫🇷 2025 | 📸 Leica M10r</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default rainy_day_in_paris_2025

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
