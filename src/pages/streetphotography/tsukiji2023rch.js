import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const tsukiji2023fuji = () => {
  const response = [
    "../japan2023-tsukiji/1.jpg",
    "../japan2023-tsukiji/2.jpg",
    "../japan2023-tsukiji/3.jpg",
    "../japan2023-tsukiji/4.jpg",
    "../japan2023-tsukiji/5.jpg",
    "../japan2023-tsukiji/6.jpg",
    "../japan2023-tsukiji/7.jpg",
    "../japan2023-tsukiji/8.jpg",
    "../japan2023-tsukiji/9.jpg",
    "../japan2023-tsukiji/10.jpg",
    "../japan2023-tsukiji/11.jpg",
    "../japan2023-tsukiji/12.jpg",
    "../japan2023-tsukiji/13.jpg",
    "../japan2023-tsukiji/14.jpg",
    "../japan2023-tsukiji/15.jpg",
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
        <Link to="../../streetphotography3/" style={{ fontSize: `1rem` }}> | Album 3</Link>
      </div>
      <h4>Tsukiji Outer Market 🇯🇵 2023 | 📸 Ricoh GRIIIx</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default tsukiji2023fuji