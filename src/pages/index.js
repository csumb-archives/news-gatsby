import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';

export default function IndexPage({ data }) {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink key={node.id} post={node} excerpt={node.excerpt} />
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
      totalCount
      edges {
        node {
          id
          excerptAst(pruneLength: 150, truncate: false)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
