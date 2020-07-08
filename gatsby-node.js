exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/article.js`);
  const result = await graphql(`
    {
      allMarkdownRemark  {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data passed via context
        node
      },
    });
  });
};
