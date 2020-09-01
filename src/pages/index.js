import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Search from '../components/search';
// import styled from '@emotion/styled';
// import PostLink from '../components/post-link';
import Layout from '../components/layout';
import SEO from '../components/seo';

// const SearchBox = styled('div')`
//   max-width: 450px;
//   margin: 30px auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: 2px solid lightgrey;
//   border-radius: 2px;
//   padding-left: 15px;
//   flex-direction: row;
//   input {
//     outline: none;
//     border: none;
//     width: 90%;
//     background: #fff;
//     font-family: 'Roboto', sans-serif;
//     height: 50px;
//     transition: all 0.05s ease-in-out;
//   }
//   button {
//     padding-right: 15px;
//     background: none;
//     border: none;
//     cursor: pointer;
//     font-size: 1.3rem;
//   }
// `;

export default function IndexPage() {
  // const { data } = props;
  // const allPosts = data.allMarkdownRemark.edges;
  // const emptyQuery = '';
  // const initialState = {
  //   query: emptyQuery,
  //   input: '',
  //   filteredData: [],
  // };
  // const [state, setState] = useState(initialState);

  // const handleInputChange = (event) => {
  //   const query = event.target.value;
  //   const input = event.target.value;
  //   const posts = data.allMarkdownRemark.edges || [];
  //   const filteredData = posts.filter((post) => {
  //     const { title } = post.node.frontmatter;
  //     return title.toLowerCase().includes(query.toLowerCase());
  //   });
  //   setState({
  //     query,
  //     input,
  //     filteredData,
  //   });
  // };

  // const handleInputReset = () => {
  //   setState({
  //     ...initialState,
  //   });
  // };

  // const { filteredData, query } = state;
  // const hasSearchResults = filteredData && query !== emptyQuery;
  // const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <SEO title="Home" />
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={(data) => <Search searchIndex={data.siteSearchIndex.index} />}
      />
      {/* {hasSearchResults && <h5>{filteredData.length} results</h5>} */}
    </Layout>
  );
}

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
//       totalCount
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 200, format: MARKDOWN)
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
// `;
