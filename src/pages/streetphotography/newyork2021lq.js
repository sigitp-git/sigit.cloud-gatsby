import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const newyork2021lq = () => {
  const response = [
    "../newyork2021-leicaq/1.jpeg",
    "../newyork2021-leicaq/2.jpeg",
    "../newyork2021-leicaq/3.jpeg",
    "../newyork2021-leicaq/4.jpeg",
    "../newyork2021-leicaq/5.jpeg",
    "../newyork2021-leicaq/6.jpeg",
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
      <h3>New York 🇺🇸 2021</h3>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default newyork2021lq