import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
      <h3>Tsukiji Outer Market 🇯🇵 2023</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default tsukiji2023fuji