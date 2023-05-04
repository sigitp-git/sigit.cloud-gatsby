import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const seattle2023 = () => {
  const response = [
    "../seattle2023/1.jpg",
    "../seattle2023/2.jpg",
    "../seattle2023/3.jpg",
    "../seattle2023/4.jpg",
    "../seattle2023/5.jpg",
    "../seattle2023/7.jpg",
    "../seattle2023/8.jpg",
    "../seattle2023/9.jpg",
    "../seattle2023/10.jpg",
    "../seattle2023/11.jpg",
    "../seattle2023/12.jpg",
    "../seattle2023/13.jpg",
    "../seattle2023/14.jpg",
    "../seattle2023/15.jpg",
    "../seattle2023/16.jpg",
    "../seattle2023/17.jpg",
    "../seattle2023/18.jpg",
    "../seattle2023/19.jpg",
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
      <h3>Seattle 2023</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2023