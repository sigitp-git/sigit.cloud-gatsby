import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const kyoto2023fuji = () => {
  const response = [
    "../japan2023-kyoto/1.jpg",
    "../japan2023-kyoto/2.jpg",
    "../japan2023-kyoto/3.jpg",
    "../japan2023-kyoto/4.jpg",
    "../japan2023-kyoto/5.jpg",
    "../japan2023-kyoto/6.jpg",
    "../japan2023-kyoto/7.jpg",
    "../japan2023-kyoto/8.jpg",
    "../japan2023-kyoto/9.jpg",
    "../japan2023-kyoto/10.jpg",
    "../japan2023-kyoto/11.jpg",
    "../japan2023-kyoto/12.jpg",
    "../japan2023-kyoto/13.jpg",
    "../japan2023-kyoto/14.jpg",
    "../japan2023-kyoto/15.jpg",
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
      <h3>Kyoto 🇯🇵 2023</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default kyoto2023fuji