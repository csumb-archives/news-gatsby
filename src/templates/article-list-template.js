import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostLink from '../components/post-link';

const Pagination = styled('div')`
  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
  }
  a.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }
  a:hover:not(.active) {
    background-color: #ddd;
  }

  a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  a:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

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
      })}
      <Pagination>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            style={
              currentPage === i + 1
                ? {
                    backgroundColor: `#112e51`,
                    color: `white`,
                    border: `1px solid #112e51`,
                  }
                : {}
            }
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
      </Pagination>
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
