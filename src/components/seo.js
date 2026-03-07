/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description = '', lang = 'en', meta = [], keywords = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            work
            company
            city
            siteUrl
            social {
              linkedin
              github
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const defaultKeywords = [
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
  ]

  const effectiveKeywords = keywords.length > 0 ? keywords : defaultKeywords

  return (
    <>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="github:creator" content={site.siteMetadata.social.github} />
      <meta name="linkedin:creator" content={site.siteMetadata.social.linkedin} />
      <meta name="blog:creator" content={site.siteMetadata.author} />
      <meta name="blog:work" content={site.siteMetadata.work} />
      <meta name="blog:company" content={site.siteMetadata.company} />
      <meta name="author:city" content={site.siteMetadata.city} />
      <meta name="blog:siteUrl" content={site.siteMetadata.siteUrl} />
      <meta name="blog:description" content={site.siteMetadata.description} />
      <meta name="keywords" content={effectiveKeywords.join(`, `)} />
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </>
  )
}

export default SEO
