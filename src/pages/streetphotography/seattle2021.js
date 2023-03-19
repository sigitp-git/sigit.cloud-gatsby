import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const seattle2021 = () => {
  const response = [
    "../seattle2021/1.DNG",
    "../seattle2021/2.DNG",
    "../seattle2021/3.DNG",
    "../seattle2021/4.DNG",
    "../seattle2021/5.DNG",
    "../seattle2021/7.DNG",
    "../seattle2021/8.DNG",
    "../seattle2021/9.DNG",
    "../seattle2021/10.DNG",
    "../seattle2021/11.DNG",
    "../seattle2021/12.DNG",
    "../seattle2021/13.DNG",
    "../seattle2021/14.jpg",
    "../seattle2021/PP.DNG",
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
      <h3>Seattle 2021 📸</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2021