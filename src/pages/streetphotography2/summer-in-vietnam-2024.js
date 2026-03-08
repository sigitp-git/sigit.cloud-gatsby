import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const summer_in_vietnam_2024 = () => {
  const response = [
    "../summer-in-vietnam-2024/1.jpg",
    "../summer-in-vietnam-2024/2.jpg",
    "../summer-in-vietnam-2024/3.jpg",
    "../summer-in-vietnam-2024/4.jpg",
    "../summer-in-vietnam-2024/5.jpg",
    "../summer-in-vietnam-2024/6.jpg",
    "../summer-in-vietnam-2024/7.jpg",
    "../summer-in-vietnam-2024/8.jpg",
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
      <h4>Summer in Vietnam 🇻🇳 2024 | 📸 Leica M10r</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default summer_in_vietnam_2024

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
