---
title: "GatsbyJS Pagination without Plugins"
date: "2020-05-19"

---

#### Running App Example

Example of running GatsbyJS blog  with pagination https://master.d2c2u44of9gyth.amplifyapp.com/. This App front-end is based on GatsbyJS/React components. The pagination done by customizing `gatsby-node.js` , `blog-list.js`, and the `blog-post.js`. 

To me, this approach is easier to implement and at the same time, provides good coding practice.  

There are two parts of the pagination:

##### Blog Post pagination (let's call it BPP)

Blog Post pagination displays next and previous post relatives to the post that currently being viewed. See below example:

![Screen Shot 2020-05-19 at 1.38.31 PM](images/Screen Shot 2020-05-19 at 1.38.31 PM.png)

#### 

##### Blog Listing pagination (let's call it BLP)

Blog Listing pagination displays how many pages in total. Provides page listing as well as next and previous page links. See below example:

![Screen Shot 2020-05-19 at 1.38.13 PM](images/Screen Shot 2020-05-19 at 1.38.13 PM.png)

#### Code

##### gatsby-node.js

As usual, Gatsby will generate static pages during build, we can control the pages by using createPages() method inside gatsby-node.js. Below snippet taken from https://github.com/sigitp-git/sigit.cloud-gatsby/blob/master/gatsby-node.js . 

```javascript
//...lines removed...
// Dynamically reate pages based on graphql query on slugs from each node, put component of that page from blog-post.js template
// Create pagination using src/templates/blog-list.js
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const blogListTemplate = path.resolve('./src/templates/blog-list.js')

    // this graphql is function string to pass graphql query, this is a node version of graphql
    // this query returns a promise of slugs. use then instead of async await
    return graphql(`
    query loadSlugQuery ($limit: Int!){
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
    `, { limit: 1000}).then(result => {
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach((post, index) => {
            // create prev and next on each posts render (for Blog Post Pagination, BPP)
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            // previous and next are objects props sent as pageContect object to blogPostTemplate
            createPage({
                path: post.node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })
        // Create blog list pages (for Blog List Pagination, BLP)
        // Assign path /2, /3, p/4, etc
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/` : `${i + 1}`,
                component: blogListTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });
    })
}
```

Note that `previous` and `next` are node objects (blog post objects) passed as `pageContext` to `blog-post.js` during render. We will utilize these two objects on our `blog-post.js` to create links to previous and next post.

Also note that `numPages` , `limit`, `skip`, and `currentPage` are objects (blog list objects) passed as `pageContext` to `blog-list.js` during render. We will utilize these objects on our `blog-list.js` to create links to blog listing pages.

##### blog-post.js

We will use the Blog Post Pagination inside blog post page, below snippet taken from https://github.com/sigitp-git/sigit.cloud-gatsby/blob/master/src/templates/blog-post.js . 

On this file, `pageContext` contains `previous` and `next` object passed by `gatsby-node.js`. We will use these objects to create links to previous and next post. 

```javascript
const BlogPost = ({ data, pageContext }) => {
    //console.log(pageContext)
    const { previous, next } = pageContext
    
      //...lines removed...
    
    return (

      //...lines removed...
      
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
```



##### blog-list.js

We will use the Blog List Pagination inside blog listing page, below snippet taken from https://github.com/sigitp-git/sigit.cloud-gatsby/blob/master/src/templates/blog-list.js . 

On this file, `pageContext` contains `numPages` , `limit`, `skip`, and `currentPage`  passed by `gatsby-node.js`. We will use these objects to create links to blog listing pages.

```javascript
const BlogList = ({ data, pageContext}) => {
      //console.log(pageContext)
  		const { numPages, limit, skip, currentPage } = pageContext
    
      //...lines removed...
    
    return (
      
      //...lines removed...
      
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
          <Link to={prevPage} rel="prev" style={{marginTop: '0.1rem', marginBottom: '0.1rem', padding: '0.5rem', color: 'var(--themeColor)'}}>
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
                color: i + 1 === currentPage ? '#ffffff' : 'var(--themeColor)',
                background: i + 1 === currentPage ? 'var(--themeColor)' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next" style={{ marginTop: '0.1rem', marginBottom: '0.1rem', padding: '0.5rem', color: 'var(--themeColor)' }}>
            {"Next >>"}
          </Link>
        )}
      </ul>
      </div>
```



#### Summary

GatsbyJS pagination can be done with plugins, but also can be done with simple code on `gatsby-node.js` , `blog-list.js`, and the `blog-post.js`. 

#### References:

https://www.gatsbyjs.org/docs/adding-pagination/ 

https://nickymeuleman.netlify.app/blog/gatsby-pagination

https://github.com/NickyMeuleman/gatsby-paginated-blog

#### Discuss on Dev.to

https://dev.to/sigitp/gatsbyjs-pagination-without-plugins-f1k