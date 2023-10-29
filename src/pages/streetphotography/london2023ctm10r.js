import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const london2023ctm10r = () => {
  const response = [
    "../london2023-ct-leicam10r/1.jpg",
    "../london2023-ct-leicam10r/2.jpg",
    "../london2023-ct-leicam10r/3.jpg",
    "../london2023-ct-leicam10r/4.jpg",
    "../london2023-ct-leicam10r/5.jpg",
    "../london2023-ct-leicam10r/6.jpg",
    "../london2023-ct-leicam10r/7.jpg",
    "../london2023-ct-leicam10r/8.jpg",
    "../london2023-ct-leicam10r/9.jpg",
    "../london2023-ct-leicam10r/10.jpg",
    "../london2023-ct-leicam10r/11.jpg",
    "../london2023-ct-leicam10r/12.jpg",
    "../london2023-ct-leicam10r/13.jpg",
    "../london2023-ct-leicam10r/14.jpg",
    "../london2023-ct-leicam10r/15.jpg",
    "../london2023-ct-leicam10r/16.jpg",
    "../london2023-ct-leicam10r/17.jpg",
    "../london2023-ct-leicam10r/18.jpg",
    "../london2023-ct-leicam10r/19.jpg",
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
      <h4>London & China Town 🇬🇧 2023 | 📸 Leica M10r, Summilux 35mm F1.4</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default london2023ctm10r