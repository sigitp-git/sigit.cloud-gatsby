import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="About" />
        <h2>About</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius: `100%` }}>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={data.site.siteMetadata.author}
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
                A blog by <strong>{data.site.siteMetadata.author}</strong><br/> 
                <strong>{data.site.siteMetadata.work}</strong><br/> 
                at <strong>{data.site.siteMetadata.company}</strong>, based in <strong>{data.site.siteMetadata.city}</strong>. {` `}<br/><br/> 
                <a href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`} target="_blank" rel="noopener noreferrer"> LinkedIn</a><br/> 
                <a href={`https://github.com/${data.site.siteMetadata.social.github}`} target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius: `100%` }}>
        <p><a href={`https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=KYC2NWE2CJ1QQKWT`} target="_blank" rel="noopener noreferrer"> AWS Certifications</a></p>
            <Image fixed={data.cert0.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image fixed={data.cert1.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image fixed={data.cert2.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image fixed={data.cert3.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
            <Image fixed={data.cert4.childImageSharp.fixed}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            />
        </div>
    </Layout>
)

export default IndexPage

export const aboutQuery = graphql`
query AboutQuery {
avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
    # fixed(width: 302, height: 403) 
    fixed(width: 202, height: 303)
    {
        ...GatsbyImageSharpFixed
    }
    }
}
cert0: file(relativePath: { eq: "cert0.png" }) {
    childImageSharp {
    fixed(width: 80, height: 80)
    {
        ...GatsbyImageSharpFixed
    }
    }
}
cert1: file(relativePath: { eq: "cert1.png" }) {
    childImageSharp {
    fixed(width: 80, height: 80)
    {
        ...GatsbyImageSharpFixed
    }
    }
}
cert2: file(relativePath: { eq: "cert2.png" }) {
    childImageSharp {
    fixed(width: 80, height: 80)
    {
        ...GatsbyImageSharpFixed
    }
    }
}
cert3: file(relativePath: { eq: "cert3.png" }) {
    childImageSharp {
    fixed(width: 80, height: 80)
    {
        ...GatsbyImageSharpFixed
    }
    }
}
cert4: file(relativePath: { eq: "cert4.png" }) {
    childImageSharp {
    fixed(width: 80, height: 80)
    {
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
    }
    }
}
}
`