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
        ]}
      />
      <h2>About</h2>
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
          borderRadius: `100%`,
        }}
      >
        <Image
          critical={true}
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
      <div style={{ display: `flex` }}>
        <p>
          A{" "}
          <a
            href={`https://www.linkedin.com/feed/hashtag/?keywords=serverless`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #serverless
          </a>{" "}
          blog by <strong>{data.site.siteMetadata.author}</strong>
          <br />
          <strong>{data.site.siteMetadata.work}</strong>
          <br />
          at <strong>{data.site.siteMetadata.company}</strong>, based in{" "}
          <strong>{data.site.siteMetadata.city}</strong>. {` `}
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
            href={`https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=KYC2NWE2CJ1QQKWT`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            AWS Certifications
          </a>
        </p>
      </div>
      <br />
      <div style={{ display: `flex`, marginBottom: `2rem` }}>
        <Image critical={true} fixed={data.cert0.childImageSharp.fixed} />
        <Image critical={true} fixed={data.cert1.childImageSharp.fixed} />
        <Image critical={true} fixed={data.cert2.childImageSharp.fixed} />
        <Image critical={true} fixed={data.cert3.childImageSharp.fixed} />
        <Image critical={true} fixed={data.cert4.childImageSharp.fixed} />
      </div>

      {/* <ImageGallery items={images} />

             <Image critical={true} fixed={data.cert0.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image critical={true} fixed={data.cert1.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image critical={true} fixed={data.cert2.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image critical={true} fixed={data.cert3.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image critical={true} fixed={data.cert4.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            /> 
        </div> */}
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        # fixed(width: 302, height: 403)
        fixed(width: 302, height: 403, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cert0: file(relativePath: { eq: "cert0.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cert1: file(relativePath: { eq: "cert1.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cert2: file(relativePath: { eq: "cert2.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cert3: file(relativePath: { eq: "cert3.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cert4: file(relativePath: { eq: "cert4.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 100) {
          ...GatsbyImageSharpFixed
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
