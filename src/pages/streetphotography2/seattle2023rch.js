import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const seattle2023rch = () => {
  const response = [
    "../seattle2023-ricohgriiix/1.jpg",
    "../seattle2023-ricohgriiix/2.jpg",
    "../seattle2023-ricohgriiix/3.jpg",
    "../seattle2023-ricohgriiix/4.jpg",
    "../seattle2023-ricohgriiix/5.jpg",
    "../seattle2023-ricohgriiix/6.jpg",
    "../seattle2023-ricohgriiix/7.jpg",
    "../seattle2023-ricohgriiix/8.jpg",
    "../seattle2023-ricohgriiix/9.jpg",
    "../seattle2023-ricohgriiix/10.jpg",
    "../seattle2023-ricohgriiix/11.jpg",
    "../seattle2023-ricohgriiix/12.jpg",
    "../seattle2023-ricohgriiix/13.jpg",
    "../seattle2023-ricohgriiix/14.jpg",
    "../seattle2023-ricohgriiix/15.jpg",
    "../seattle2023-ricohgriiix/16.jpg",
    "../seattle2023-ricohgriiix/17.jpg",
    "../seattle2023-ricohgriiix/18.jpg",
    "../seattle2023-ricohgriiix/19.jpg",
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
      <h4>Seattle 🇺🇸 2023 | 📸 Ricoh GRIIIx</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2023rch