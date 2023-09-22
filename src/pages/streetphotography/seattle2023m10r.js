import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const seattle2023m10r = () => {
  const response = [
    "../seattle2023-leicam10r/1.jpg",
    "../seattle2023-leicam10r/2.jpg",
    "../seattle2023-leicam10r/3.jpg",
    "../seattle2023-leicam10r/4.jpg",
    "../seattle2023-leicam10r/5.jpg",
    "../seattle2023-leicam10r/6.jpg",
    "../seattle2023-leicam10r/7.jpg",
    "../seattle2023-leicam10r/8.jpg",
    "../seattle2023-leicam10r/9.jpg",
    "../seattle2023-leicam10r/10.jpg",
    "../seattle2023-leicam10r/11.jpg",
    "../seattle2023-leicam10r/12.jpg",
    "../seattle2023-leicam10r/13.jpg",
    "../seattle2023-leicam10r/14.jpg",
    "../seattle2023-leicam10r/15.jpg",
    "../seattle2023-leicam10r/16.jpg",
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
      <h4>Seattle 🇺🇸 Summer'23 | 📸 Leica M10r, Summilux 35mm F1.4</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2023m10r