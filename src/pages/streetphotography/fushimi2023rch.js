import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const fushimi2023fuji = () => {
  const response = [
    "../japan2023-fushimi/1.jpg",
    "../japan2023-fushimi/2.jpg",
    "../japan2023-fushimi/3.jpg",
    "../japan2023-fushimi/4.jpg",
    "../japan2023-fushimi/5.jpg",
    "../japan2023-fushimi/6.jpg",
    "../japan2023-fushimi/7.jpg",
    "../japan2023-fushimi/8.jpg",
    "../japan2023-fushimi/9.jpg",
    "../japan2023-fushimi/10.jpg",
    "../japan2023-fushimi/11.jpg",
    "../japan2023-fushimi/12.jpg",
    "../japan2023-fushimi/13.jpg",
    "../japan2023-fushimi/14.jpg",
    "../japan2023-fushimi/15.jpg",
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
      <h4>Fushimi Inari night hike 🇯🇵 2023 | 📸 Ricoh GRIIIx</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default fushimi2023fuji