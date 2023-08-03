import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const seattle2021lq = () => {
  const response = [
    "../seattle2021-leicaq/1.jpeg",
    "../seattle2021-leicaq/2.jpeg",
    "../seattle2021-leicaq/3.jpeg",
    "../seattle2021-leicaq/4.jpeg",
    "../seattle2021-leicaq/5.jpeg",
    "../seattle2021-leicaq/7.jpeg",
    "../seattle2021-leicaq/8.jpeg",
    "../seattle2021-leicaq/9.jpeg",
    "../seattle2021-leicaq/10.jpeg",
    "../seattle2021-leicaq/11.jpeg",
    "../seattle2021-leicaq/12.jpeg",
    "../seattle2021-leicaq/13.jpeg",
    "../seattle2021-leicaq/14.jpeg",
    "../seattle2021-leicaq/PP.jpeg",
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
      <h4>Seattle 🇺🇸 2021 | 📸 Leica Q</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default seattle2021lq