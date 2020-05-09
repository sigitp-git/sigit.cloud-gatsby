import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div style={{'marginLeft': '5rem', 'marginRight': '5rem'}}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML = {{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export default BlogPost

// $slug is a context passed from gatsby-node.js, the context named 'slug' during the createPage() action
export const query = graphql`
query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug}}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`
