import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const stroget2023fuji = () => {
  const response = [
    "../denmark2023-stroget/1.jpg",
    "../denmark2023-stroget/2.jpg",
    "../denmark2023-stroget/3.jpg",
    "../denmark2023-stroget/4.jpg",
    "../denmark2023-stroget/5.jpg",
    "../denmark2023-stroget/6.jpg",
    "../denmark2023-stroget/7.jpg",
    "../denmark2023-stroget/8.jpg",
    "../denmark2023-stroget/9.jpg",
    "../denmark2023-stroget/10.jpg",
    "../denmark2023-stroget/11.jpg",
    "../denmark2023-stroget/12.jpg",
    "../denmark2023-stroget/13.jpg",
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
      <h4>Strøget 🇩🇰 2023 | 📸 Fuji XT-5, XF35mm F1.4</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default stroget2023fuji