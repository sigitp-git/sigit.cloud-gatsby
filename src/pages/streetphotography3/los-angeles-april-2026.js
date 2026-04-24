import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const los_angeles_april_2026 = () => {
  const response = Array.from({ length: 17 }, (_, i) => `../los-angeles-april-2026/${i + 1}.jpg`)

  const images = response.map(url => ({
    original: `${url}`,
    thumbnail: `${url}`,
  }))

  return (
    <Layout>
      <div
        style={{
          background: `transparent`,
          marginBottom: `1rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
        <Link to="../../streetphotography3/" style={{ fontSize: `1rem` }}> | Album 3</Link>
      </div>
      <h4>Los Angeles 🇺🇸 April 2026 | 📸 Leica Q3-28</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default los_angeles_april_2026

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `los angeles`]}
    />
  )
}
