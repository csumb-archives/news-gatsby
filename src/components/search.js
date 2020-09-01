import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import styled from '@emotion/styled';
import ArticleLink from './article-link';

const SearchBox = styled('div')`
  max-width: 450px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid lightgrey;
  border-radius: 2px;
  padding-left: 15px;
  flex-direction: row;
  input {
    outline: none;
    border: none;
    width: 90%;
    background: #fff;
    font-family: 'Roboto', sans-serif;
    height: 50px;
    transition: all 0.05s ease-in-out;
  }
  button {
    padding-right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;
export default class Search extends Component {
  state = {
    query: ``,
    results: [],
  };

  render() {
    return (
      <div>
        <SearchBox>
          <input type="text" value={this.state.query} onChange={this.search} />
        </SearchBox>
        <ul style={{ listStyleType: 'none' }}>
          {this.state.results.map((page) => (
            <ArticleLink
              slug={page.slug}
              title={page.title}
              excerpt={page.html}
            />
          ))}
        </ul>
      </div>
    );
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);
  };

  search = (evt) => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => {
          return this.index.documentStore.getDoc(ref);
        }),
    });
  };
}
