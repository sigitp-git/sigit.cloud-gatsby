import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Disclaimer = () => (
  <Layout>
    <SEO
      title="Disclaimer"
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
    <h2>Disclaimer</h2>
    <div style={{border: '1px solid var(--blogListBrdr)', marginTop: '1rem', marginBottom: '3rem', background: 'var(--blogListBG)', paddingTop: '1rem', paddingBottom: '0rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
      <p>
        Any views or opinions expressed here are strictly my own. While I work
        for Amazon Web Services (AWS), this blog is not my job for AWS. I am
        solely responsible for all content published here.
      </p>
      <p>
        This is a personal exploration blog, not a corporate blog. Content
        published here is not read, reviewed, or approved in advance by my
        employer and does not necessarily represent or reflect the views or
        opinions of my employer or any of its divisions, subsidiaries, or
        business partners.
      </p>
    </div>
  </Layout>
)

export default Disclaimer
