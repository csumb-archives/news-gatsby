module.exports = {
  siteMetadata: {
    title: `CSUMB News Archive`,
    description: `A place for CSUMB's news articles to stay when their time on our website has passed.`,
    author: `Cody Wall | CSUMB Web Services`,
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
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `news-gatsby`,
        short_name: `news`,
        start_url: `/`,
        background_color: `rgb(17, 46, 81)`,
        theme_color: `rgb(17, 46, 81)`,
        display: `minimal-ui`,
        icon: `src/images/archive-otter.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `slug`, `html`],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            slug: (node) => node.frontmatter.slug,
            html: (node) => node.internal.content,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
