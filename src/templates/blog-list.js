import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogList = ({ data, pageContext}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  //console.log(pageContext)

  return (
    <Layout location={pageContext.location} title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`sigit`, `aws`, `severless`, `amplify`, `appsync`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} style={{marginTop: '1rem', marginBottom: '3rem'}}>
            <h2
              style={{
                marginBottom: '1rem',
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h2>
            {node.frontmatter.date}
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
          </div>
        )
      })}
      <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev" style={{marginTop: '0.1rem', marginBottom: '0.1rem', padding: '0.5rem', color: 'darkslateblue'}}>
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
              to={`/${i === 0 ? '' : i + 1}`}
              style={{
                marginTop: '0.1rem',
                marginBottom: '0.1rem',
                padding: '0.5rem',
                textDecoration: 'none',
                color: i + 1 === currentPage ? '#ffffff' : 'darkslateblue',
                background: i + 1 === currentPage ? 'darkslateblue' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next" style={{ marginTop: '0.1rem', marginBottom: '0.1rem', padding: '0.5rem', color: 'darkslateblue' }}>
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
