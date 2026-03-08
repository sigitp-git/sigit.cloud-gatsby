import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const street_food_stalls_fukuoka_2025 = () => {
  const response = [
    "../street-food-stalls-fukuoka-2025/1.jpg",
    "../street-food-stalls-fukuoka-2025/2.jpg",
    "../street-food-stalls-fukuoka-2025/3.jpg",
    "../street-food-stalls-fukuoka-2025/4.jpg",
    "../street-food-stalls-fukuoka-2025/5.jpg",
    "../street-food-stalls-fukuoka-2025/6.jpg",
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
      <h4>Street food stalls, Fukuoka 🇯🇵 2025 | 📸 Leica M10r</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default street_food_stalls_fukuoka_2025

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
