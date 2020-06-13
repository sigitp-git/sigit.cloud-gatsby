import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ data }) => {
  console.log(data.allFile.edges[0].node.childImageSharp)

  const images = data.allFile.edges.map(({ node }) => ({
    original: node.childImageSharp.original.src,
    thumbnail: node.childImageSharp.thumbnail.src,
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
      <ImageGallery items={images} />
    </Layout>
  )
}
export default Gallery

export const query = graphql`
  query ImagesForGallery {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/gallery/" }
      }
      sort: { order: ASC, fields: absolutePath }
    ) {
      edges {
        node {
          childImageSharp {
            original: fixed(width: 1024, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            thumbnail: fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
