import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

// catch data from graphql, catch pageContext from gatsby-node.js
const BlogPost = ({ data, pageContext }) => {
    //console.log(pageContext)
    const { previous, next } = pageContext
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div><br/>
            <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            {"<<"+previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title+">>"}
                        </Link>
                    )}
                </li>
            </ul>
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
