import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => {
  const response = [
    "sigit-zk-mwc23-1.jpeg",
    "sigit-mwc23-ipw-demo-dbrown.jpeg",
    "_0 (6).JPG",
    "DSC_0211.JPG",
    "DSC_0292.JPG",
    "IMG_2271.jpg",
    "IMG_2279.jpg",
    "IMG_0354.JPG",
    "FullSizeRender.jpg",
    "IMG-4242.jpg",
    "IMG-4249.jpg",
    "IMG-4255.jpg",
    "IMG_0123.JPG",
    "IMG_0219.jpg",
    "IMG_0241.jpg",
    "IMG_0282.JPG",
    "IMG_0299.JPG",
    "IMG_0391.JPG",
    "IMG_0509.JPG",
    "IMG_0513.JPG",
    "IMG_0555.HEIC.png",
    "IMG_0556.HEIC.png",
    "IMG_0584.JPG",
    "IMG_0757.JPG",
    "IMG_0763.JPG",
    "IMG_0765.JPG",
    "IMG_0768.PNG",
    "IMG_0768.jpg",
    "IMG_0769.JPG",
    "IMG_0774.JPG",
    "IMG_0779.JPG",
    "IMG_0889.JPG",
    "IMG_0893.JPG",
    "IMG_1112.jpg",
    "IMG_1135.JPG",
    "IMG_1223.JPG",
    "IMG_1233.JPG",
    "IMG_1255.JPG",
    "IMG_1300.JPG",
    "IMG_1432.jpg",
    "IMG_1439.jpg",
    "IMG_1603.jpg",
    "IMG_1668.jpg",
    "IMG_1688.jpg",
    "IMG_1884.JPG",
    "IMG_1914.JPG",
    "IMG_1931.JPG",
    "IMG_1935.JPG",
    "IMG_2041.jpg",
    "IMG_2206.JPG",
    "IMG_2296.jpeg",
    "IMG_2311.jpeg",
    "IMG_2515.JPG",
    "IMG_2665.JPG",
    "IMG_2690.JPG",
    "IMG_2869.HEIC.png",
    "IMG_3083.jpg",
    "IMG_3107.jpg",
    "IMG_3215.JPG",
    "IMG_3278.JPG",
    "IMG_3279.JPG",
    "IMG_3564.JPG",
    "IMG_4212.jpeg",
    "IMG_4213.jpeg",
    "IMG_4215.jpeg",
    "IMG_4232.jpg",
    "IMG_4722.JPG",
    "IMG_4813.JPG",
    "IMG_5452.jpg",
    "IMG_5983.jpg",
    "Partner TAM1.jpg",
    "Partner TAM2.jpg",
    "Snapseed-1.jpg",
    "Snapseed-2.jpg",
    "Snapseed.jpg",
    "SysOps Cert SME2.jpg",
    "awsbuilders.jpg",
    "brisket.jpg",
    "brisket775.jpg",
    "sparring 3tvs1-1.png",
    "sparring 3tvs1-2.png",
    "29497290_10156251179530948_3405242585587908608_o.jpg",
    "4f3a84c8-3d15-4d9f-8818-d6bd6a66dc3e.jpg",
    "68638214_10157523681240948_4553230624470597632_n.jpg",
    "68756341_10157523681195948_1357199177225863168_n.jpg",
    "68813082_10157523681215948_6210054691724722176_n.jpg",
    "69056436_10157523681225948_4252389910805217280_n.jpg",
    "AWS-reinvent2021-sigit.1.png",
    "AWS-reinvent2021-sigit.2.png",
  ]

  const images = response.map(url => ({
    original: `${url}`,
    thumbnail: `${url}`,
  }))

  return (
    <Layout>
      <SEO
        title="Gallery"
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
      <h2>Gallery</h2>
      <ImageGallery items={images} slideOnThumbnailOver={true} lazyLoad={true}/>
    </Layout>
  )
}
export default Gallery
