import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const yosakoi2023fuji = () => {
  const response = [
    "../japan2023-yosakoi/1.jpg",
    "../japan2023-yosakoi/2.jpg",
    "../japan2023-yosakoi/3.jpg",
    "../japan2023-yosakoi/4.jpg",
    "../japan2023-yosakoi/5.jpg",
    "../japan2023-yosakoi/6.jpg",
    "../japan2023-yosakoi/7.jpg",
    "../japan2023-yosakoi/8.jpg",
    "../japan2023-yosakoi/9.jpg",
    "../japan2023-yosakoi/10.jpg",
    "../japan2023-yosakoi/11.jpg",
    "../japan2023-yosakoi/12.jpg",
    "../japan2023-yosakoi/13.jpg",
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
      <h4>Yosakoi Soran festival, Sapporo 🇯🇵 2023</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default yosakoi2023fuji