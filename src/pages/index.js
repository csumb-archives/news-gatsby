import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import PostLink from '../components/post-link';
import Layout from '../components/layout';

const SearchBox = styled('div')`
  max-width: 500px;
  margin: 30px auto;
  input {
    outline: none;
    width: 100%;
    border: 2px solid lightgrey;
    border-radius: 2px;
    background: #fff;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    height: 50px;
    transition: all 0.05s ease-in-out;
  }
`;

const PostsWrapper = styled('div')``;
export default function IndexPage(props) {
  const { data } = props;
  const allPosts = data.allMarkdownRemark.edges;
  const emptyQuery = '';
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;
    const posts = data.allMarkdownRemark.edges || [];
    const filteredData = posts.filter((post) => {
      const { title } = post.node.frontmatter;

      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <SearchBox>
        <input
          type="text"
          aria-label="Search"
          placeholder={`Search ${data.allMarkdownRemark.totalCount} articles...`}
          onChange={handleInputChange}
        />
      </SearchBox>
      <PostsWrapper>
        {posts.map(({ node }) => (
          <PostLink key={node.id} post={node} excerpt={node.excerpt} />
        ))}
      </PostsWrapper>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 200, format: MARKDOWN)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
