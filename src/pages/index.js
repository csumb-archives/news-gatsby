import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';

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
    <div>
      <h1>News Archive</h1>
      <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
      </div>
      {posts.map(({ node }) => (
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
