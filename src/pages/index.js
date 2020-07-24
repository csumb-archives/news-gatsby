import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';

export default function IndexPage({ data }) {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink key={node.id} post={node} />
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
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
