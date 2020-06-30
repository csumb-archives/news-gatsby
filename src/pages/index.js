import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge) => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));
  return <div>{Posts}</div>;
};
export default IndexPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
