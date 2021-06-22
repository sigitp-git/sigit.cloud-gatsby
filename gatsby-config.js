module.exports = {
  siteMetadata: {
    title: 'sigit.cloud',
    author: 'Sigit Priyanggoro',
    work: 'Senior Product Manager - Technical',
    company: 'Amazon Web Services',
    city: 'Seattle',
    description:
      'sigit.cloud, a serverless blog, built with GatsbyJS, AWS Amplify, AWS AppSync, and Amazon DynamoDB',
    siteUrl: 'https://sigit.cloud',
    social: {
      linkedin: `sigitpriyanggoro`,
      github: `sigitp-git`,
      devto: `sigitp`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdblogs`,
        path: `${__dirname}/src/mdblogs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              loading: `eager`,
              quality: 100,
            }
          }
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
