import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About"
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
          `5g`,
          `cloud`,
          `product manager`,
          `solutions architect`,
          `architect`,
        ]}
      />
      <h2>About - Sigit Priyanggoro</h2>
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          borderRadius: `100%`,
        }}
      >
        <Image
          eager
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          style={{
            marginRight: "1rem",
            marginBottom: 10,
            minWidth: 50,
            borderRadius: `3%`,
          }}
        />
      </div>
      <div>
        <p>I am a Technical Product Manager, Solutions Architect, and Technical Lead for AWS 5G, and EC2 Edge services.
          I work backwards with AWS hardware engineering, software engineering, and data center systems engineering to innovate on behalf of AWS customers and partners worldwide.
          I am also an active contributor to AWS Telecom community, drives collaboration across AWS customers and partners to build best practices utilizing AWS technologies.
          <br />
          It's always Day 1: Work Hard. Have Fun. Make History.
        </p>
        <hr />
      </div>
      <div style={{ display: `flex` }}>
        <p>
          This is a{" "}
          <a
            href={`https://www.linkedin.com/feed/hashtag/?keywords=serverless`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #serverless
          </a>{" "}
          lightweight{" "}<a
            href={`https://developer.mozilla.org/en-US/docs/Glossary/SPA`}
            target="_blank"
            rel="noopener noreferrer"
          >
            SPA
            {` `}
          </a>
          {`blog built with `}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          {`, `}
          <a
            href="https://aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Amplify
          </a>
          {`, and `}
          <a
            href="https://aws.amazon.com/appsync/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS AppSync
          </a>
          {`.`}
          {/* {" "}blog by <strong>{data.site.siteMetadata.author}</strong>
          <br />
          <strong>{data.site.siteMetadata.work}</strong>
          <br />
          at <strong>{data.site.siteMetadata.company}</strong>, based in{" "}
          <strong>{data.site.siteMetadata.city}</strong>. {` `} */}
          <br />
          <br />
          <a
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
          <br />
          <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
          <br />
          <a
            href={`https://dev.to/${data.site.siteMetadata.social.devto}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Dev.To
          </a>
          <br />
          <a
            href={`https://aws.amazon.com/blogs/?filtered-posts.q=sigit%2Bpriyanggoro&filtered-posts.q_operator=AND&awsf.blog-master-events=*all`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            AWS Blogs
          </a>
          <br />
          <a
            href={`https://www.credly.com/users/sigit-priyanggoro`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            AWS Certifications
          </a>
        </p>
      </div>
      <div style={{ display: `flex`, marginBottom: `2rem` }}>
        <div
          style={{
            minWidth: `30px`,
            marginBottom: `1.45rem`,
            borderRadius: `100%`,
            display: `flex`,
            flexWrap: `wrap`,
            float: `left`,
            alignItems: `flex-start`,
          }}
        >
          {data.allFile.edges.map(({ node }, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              <Image eager fixed={node.childImageSharp.fixed} alt={node.name} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 302, height: 403, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/cer/" }
      }
      sort: { order: ASC, fields: relativePath }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        work
        company
        city
        social {
          linkedin
          github
          devto
        }
      }
    }
  }
`