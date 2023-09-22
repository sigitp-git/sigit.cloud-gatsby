import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const nyhavn2023m10r = () => {
  const response = [
    "../denmark2023-nyhavn/1.jpg",
    "../denmark2023-nyhavn/2.jpg",
    "../denmark2023-nyhavn/3.jpg",
    "../denmark2023-nyhavn/4.jpg",
    "../denmark2023-nyhavn/5.jpg",
    "../denmark2023-nyhavn/6.jpg",
  ]

  const images = response.map(url => ({
    original: `${url}`,
    thumbnail: `${url}`,
  }))

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
          marginBottom: `1rem`,
          border: `1px hidden var(--headerSubLinkBG)`,
        }}
      >
        <Link to="../../streetphotography/" style={{ fontSize: `1rem` }}>📸 | Album 1</Link>
        <Link to="../../streetphotography2/" style={{ fontSize: `1rem` }}> | Album 2</Link>
      </div>
      <h4>Nyhavn 🇩🇰 2023 | 📸 Leica M10r, Summilux 35mm F1.4</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default nyhavn2023m10r