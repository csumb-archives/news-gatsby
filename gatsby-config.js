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
        icon: `src/images/archive-otter.png`,
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [{ name: 'en' }],
        fields: [
          { name: `title`, store: true, attributes: { boost: 20 } },
          { name: `html`, store: true, attributes: { boost: 5 } },
          { name: `slug`, store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            slug: (node) => node.frontmatter.slug,
            html: (node) => node.internal.content,
          },
        },
        filename: 'search_index.json',
      },
    },
  ],
};
