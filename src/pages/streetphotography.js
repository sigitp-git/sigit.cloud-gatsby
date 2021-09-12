import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

const streetPhotography = () => {
  const response = [
    "1.DNG",
    "2.DNG",
    "3.DNG",
    "4.DNG",
    "5.DNG",
    "7.DNG",
    "8.DNG",
    "9.DNG",
    "10.DNG",
    "11.DNG",
    "12.DNG",
    "13.DNG",
    "14.jpg",
    "PP.DNG",
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
        ]}
      />
      <h2>Street Photography</h2>
      <ImageGallery items={images} slideOnThumbnailOver={false} />
    </Layout>
  )
}
export default streetPhotography
