import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const labuan_bajo_east_nusa_tenggara_2024 = () => {
  const response = [
    "../labuan-bajo-east-nusa-tenggara-2024/1.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/2.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/3.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/4.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/5.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/6.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/7.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/8.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/9.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/10.jpg",
    "../labuan-bajo-east-nusa-tenggara-2024/11.jpg",
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
      <h4>Labuan Bajo, East Nusa Tenggara 🇮🇩 2024 | 📸 Leica M10r</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default labuan_bajo_east_nusa_tenggara_2024

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `leica`, `fujifilm`]}
    />
  )
}
