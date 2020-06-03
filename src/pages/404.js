import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness....</p>
    <p>
      You might have older link from my previous blog, now I migrated my blog to
      be completely serverless, please visit the new{` `}
      <Link to="/">https://sigit.cloud</Link>!!{" "}
    </p>
    <br /> <br />
  </Layout>
)

export default NotFoundPage
