import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/post-link';

export default function ArticleList(props) {
  const posts = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/articles'
      : `/articles/${(currentPage - 1).toString()}`;
  const nextPage = `/articles/${(currentPage + 1).toString()}`;
  return (
    <Layout>
      {posts.map(({ node }) => {
        return (
          <PostLink
            key={node.frontmatter.slug}
            post={node}
            excerpt={node.excerpt}
          />
        );
      })}{' '}
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/articles/${i === 0 ? '' : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
}

export const articleListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___title }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300, format: MARKDOWN)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
