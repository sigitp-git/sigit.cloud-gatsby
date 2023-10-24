import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const shibuya2023fuji = () => {
  const response = [
    "../japan2023-shibuya/1.jpg",
    "../japan2023-shibuya/2.jpg",
    "../japan2023-shibuya/3.jpg",
    "../japan2023-shibuya/4.jpg",
    "../japan2023-shibuya/5.jpg",
    "../japan2023-shibuya/6.jpg",
    "../japan2023-shibuya/7.jpg",
    "../japan2023-shibuya/8.jpg",
    "../japan2023-shibuya/9.jpg",
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
      <h4>Shibuya 🇯🇵 2023 | 📸 Fuji X100v</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default shibuya2023fuji