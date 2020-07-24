import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';

const IndexPage = (data) => {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink key={node.id} post={node} />
      ))}
    </div>
  );
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
