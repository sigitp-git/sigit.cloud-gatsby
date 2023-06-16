import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
      <h4>Shibuya 🇯🇵 2023</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default shibuya2023fuji