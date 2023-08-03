import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const tokyo2023fuji = () => {
  const response = [
    "../japan2023-tokyo-jr/1.jpg",
    "../japan2023-tokyo-jr/2.jpg",
    "../japan2023-tokyo-jr/3.jpg",
    "../japan2023-tokyo-jr/4.jpg",
    "../japan2023-tokyo-jr/5.jpg",
    "../japan2023-tokyo-jr/6.jpg",
    "../japan2023-tokyo-jr/7.jpg",
    "../japan2023-tokyo-jr/8.jpg",
    "../japan2023-tokyo-jr/9.jpg",
    "../japan2023-tokyo-jr/10.jpg",
    "../japan2023-tokyo-jr/11.jpg",
    "../japan2023-tokyo-jr/12.jpg",
    "../japan2023-tokyo-jr/13.jpg",
    "../japan2023-tokyo-jr/14.jpg",
    "../japan2023-tokyo-jr/15.jpg",
    "../japan2023-tokyo-jr/16.jpg",
    "../japan2023-tokyo-jr/17.jpg",
    "../japan2023-tokyo-jr/18.jpg",
    "../japan2023-tokyo-jr/19.jpg",
    "../japan2023-tokyo-jr/20.jpg",
    "../japan2023-tokyo-jr/21.jpg",
    "../japan2023-tokyo-jr/22.jpg",
    "../japan2023-tokyo-jr/23.jpg",
    "../japan2023-tokyo-jr/24.jpg",
    "../japan2023-tokyo-jr/25.jpg",
    "../japan2023-tokyo-jr/26.jpg",
    "../japan2023-tokyo-jr/27.jpg",
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
      <h4>Tokyo 🇯🇵 Friday night 2023 | 📸 Fuji X100v</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default tokyo2023fuji