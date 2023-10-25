import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const london2023fujixt5 = () => {
  const response = [
    "../london2023-fujixt5/1.jpg",
    "../london2023-fujixt5/2.jpg",
    "../london2023-fujixt5/3.jpg",
    "../london2023-fujixt5/4.jpg",
    "../london2023-fujixt5/5.jpg",
    "../london2023-fujixt5/6.jpg",
    "../london2023-fujixt5/7.jpg",
    "../london2023-fujixt5/8.jpg",
    "../london2023-fujixt5/9.jpg",
    "../london2023-fujixt5/10.jpg",
    "../london2023-fujixt5/11.jpg",
    "../london2023-fujixt5/12.jpg",
    "../london2023-fujixt5/13.jpg",
    "../london2023-fujixt5/14.jpg",
    "../london2023-fujixt5/15.jpg",
    "../london2023-fujixt5/16.jpg",
    "../london2023-fujixt5/17.jpg",
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
      <h4>London 🇬🇧 2023 | 📸 Fuji XT-5, XF35mm F1.4</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default london2023fujixt5