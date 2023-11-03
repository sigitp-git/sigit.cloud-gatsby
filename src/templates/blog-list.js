import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

const BlogList = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  //console.log(pageContext)

  return (
    <Layout location={pageContext.location} title={siteTitle}>
      <SEO
        title={siteTitle}
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

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link key={node.fields.slug} style={{ boxShadow: "none" }} to={node.fields.slug}>
            <div key={node.fields.slug} className="blog-list">
              <h2
                style={{
                  marginBottom: "1rem",
                }}
              >
                {title}
              </h2>
              {node.frontmatter.date}
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </Link>
        )
      })}
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link
              to={`/`+prevPage}
              rel="prev"
              style={{
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
                padding: "0.5rem",
                color: "var(--headerColor)",
              }}
            >
              {"<< Prev"}
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                  textDecoration: "none",
                  color:
                    i + 1 === currentPage ? "#ffffff" : "var(--headerColor)",
                  background: i + 1 === currentPage ? "var(--headerColor)" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link
              to={`/`+nextPage}
              rel="next"
              style={{
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
                padding: "0.5rem",
                color: "var(--headerColor)",
              }}
            >
              {"Next >>"}
            </Link>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
