import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const seattle2021 = () => {
  const response = [
    "../seattle2021/1.jpeg",
    "../seattle2021/2.jpeg",
    "../seattle2021/3.jpeg",
    "../seattle2021/4.jpeg",
    "../seattle2021/5.jpeg",
    "../seattle2021/7.jpeg",
    "../seattle2021/8.jpeg",
    "../seattle2021/9.jpeg",
    "../seattle2021/10.jpeg",
    "../seattle2021/11.jpeg",
    "../seattle2021/12.jpeg",
    "../seattle2021/13.jpeg",
    "../seattle2021/14.jpeg",
    "../seattle2021/PP.jpeg",
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
      <h3>Seattle 2021</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2021