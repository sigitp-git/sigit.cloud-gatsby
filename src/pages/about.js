import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "gatsby-image"
import SEO from "../components/seo"
//import ImageGallery from "react-image-gallery";

const About = ({ data }) => {

    // // Source: https://google-photos-album-demo.glitch.me/yuuwZL6S8xEPzFLU9
    // const response = ["https://lh3.googleusercontent.com/E6xUtKDxsesMvgh5uDXcSZVFglC8PrgbENubZDrWAT83ooBqQvUARfhR0k_WI1ZlydTrUFhCQyOG29YmY0HqK3JKnZ8hOVRySXMYBEFx3CkiKn3_2j6qt2q4Qm02mtcDbZAO8cS3wHw","https://lh3.googleusercontent.com/twgJt3k-TiwC81lOTRqr58Smx5vfGNojQrA0EENu4qU-LZcPSxlAHR6WMj0zoEW-8QgR_5VgiUDgnyteZeR2YOhPnqA3gP-urzFGtw_0CYrxoFpjnlYeqMfBM6IOWhSE6r4Y2MdrNXM","https://lh3.googleusercontent.com/a-_I_2Sxws3JRSa_ewsSI2aDER7qsLIxokraQAsOntwk6T2oCL9R08hQffrCbLlzwVxdOiMFZh8EIo3cyUOZwkVvCKP9GM7NXtdpy2sDTsxXp9eZm4RJHghMzRgrXAyuCSOiiUOeQ0g","https://lh3.googleusercontent.com/JJAro1YgKWThQ410M-mtTHxobXMfuBJHxET9tu16l3a54Yq8de5PWPYGw23VBhda8ODFhBygC1EwtjYrnw-CVEcpPr33YJ9aJZMeAXz2-GjNkD6lpaRzkL0-kOEN7lxYcukgvCun3og","https://lh3.googleusercontent.com/GYSN1TtbniEv9ktkErnoESo-YaWIl14weEKw4L61tSQPnhpwVbNFKKdBT2E_zjDHY74SGFxkfLB9lcCfbKkqEDRJmIE-Wbwi07-hxiwmDbW69nGoTkhUUimNpV4iMNoE-ho3HjCKvUU"]

    // const images = response.map(url => ({
    //     original: `${url}=w1024`,
    //     thumbnail: `${url}=w100`
    // }))

    return (
    <Layout>
        <SEO
            title="About"
            keywords={[`sigit`, `priyanggoro`, `sigit priyanggoro`, `aws`, `severless`, `amplify`, `appsync`, `blog`, `gatsby`, `javascript`, `react`, `reactjs`]}
        />
        <h2>About</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius: `100%` }}>
            {/* <Image critical={true} fixed={data.avatar.childImageSharp.fixed} alt={data.site.siteMetadata.author}
                style={{
                    marginRight: "1rem",
                    marginBottom: 10,
                    minWidth: 50,
                    borderRadius: `3%`,
                }}
            /> */}
            <img src="https://lh3.googleusercontent.com/J27HC4Vfi6CWgao8hotm0R04gkDuJ-N4u_0zBX0idshetS7i40MuEfrLgBGDTxpPRqbC4x-WIf6Ou4Y91eImvTMm0EWoQex4512xtwSlSUp-Ef0lnI8R_ixKm6ViTwLYL6381Hn2giU=w1024" alt={data.site.siteMetadata.author}
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
                A <a href={`https://www.linkedin.com/feed/hashtag/?keywords=serverless`} target="_blank" rel="noopener noreferrer">#serverless</a> blog by <strong>{data.site.siteMetadata.author}</strong><br/> 
                <strong>{data.site.siteMetadata.work}</strong><br/> 
                at <strong>{data.site.siteMetadata.company}</strong>, based in <strong>{data.site.siteMetadata.city}</strong>. {` `}<br/><br/> 
                <a href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`} target="_blank" rel="noopener noreferrer"> LinkedIn</a><br/> 
                <a href={`https://github.com/${data.site.siteMetadata.social.github}`} target="_blank" rel="noopener noreferrer"> GitHub</a><br/>
                <a href={`https://dev.to/${data.site.siteMetadata.social.devto}`} target="_blank" rel="noopener noreferrer"> Dev.To</a><br/>
                <a href={`https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=KYC2NWE2CJ1QQKWT`} target="_blank" rel="noopener noreferrer"> AWS Certifications</a>
            </p>
        </div>
        <div style={{ display: `flex` }}>
            <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderRadius: `100%`, float: `left`}}>
                <img alt="cert" src="https://lh3.googleusercontent.com/pw/ACtC-3dtyGkMtYQMO4sr-2oQaA33HlnpxwVWGgpmmwvmHiQ8qXn0EkZyjEFJb8HFPiDEdvoGuwNHVwNtbPRnFunZAfGZmlGz7HORV9oO3aJDLAUhxt8BYBf-MrEz7d1gXDZFGwgxkbltXn7LVFoofK33UWuH1Q=s512-no?authuser=0"/>
            </div>
            <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderRadius: `100%`, float: `left` }}>
                <img alt="cert" src="https://lh3.googleusercontent.com/pw/ACtC-3dFLKZIPhYG_hBFMrb4DVvyU6RV4RQJ5tiQV69xla-5C3j65-bcPU2fwo6v88bnz3Xg5sHLT9JbQ9pjsIMyIA4DzRzBIbqhcYdFWjDJE0B2CIeJJbhVsneoKilutjXTLj88exqjUkzY54rEWfCa08DbqQ=s512-no?authuser=0"/>
            </div>
            <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderRadius: `100%`, float: `left` }}>
                <img alt="cert" src="https://lh3.googleusercontent.com/pw/ACtC-3coK-UgiuG62rZwZRtK6zH2JcrWzeaxMULM8dvzTA6T23gPCb2B_lXWYVD7jsmeJPD3QHHDOOKaK38jlKA5taotmIGbenaQGxZMEoKqcRlEWkoQGkv2CR3tqWt1N7O_JEHV1iN0vnlfVl4zYe7NO_aKJA=s512-no?authuser=0"/>
            </div>
            <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderRadius: `100%`, float: `left` }}>
                <img alt="cert" src="https://lh3.googleusercontent.com/pw/ACtC-3d21KYnY2WSbSbgkL7Dfz5ldzXCVplnBlxmlR1DBeTiP5qbkSWVDlNjKqy-_r8JM-cAcQy-Kxc-A99OQtU8rIZQKBENUR2vQfqOqnK-ufMV9XiPnznrA7mdEUJAuHgyWU1jjMM4VivXIklyEs9Sd9210g=s512-no?authuser=0"/>
            </div>
            <div style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderRadius: `100%`, float: `left` }}>
                <img alt="cert" src="https://lh3.googleusercontent.com/pw/ACtC-3e_93hIROyznUz00XgrMPx0ym0B1_XinAfXcHEhUUQLO9uu5KcbOfpOapZSscEQtxKXptsrjYWmD1l7Qv4Cdxeaz1xBh0VgDY6AkY9qWcJz1WRjl0WgOXjcUnaTN_d4SOjn6lCidRIMHiHHiE5INJ6-rw=s512-no?authuser=0"/>
            </div>
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
        devto
    }
    }
}
}
`