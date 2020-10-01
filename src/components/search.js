import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import styled from '@emotion/styled';
import ArticleLink from './article-link';

const SearchBox = styled('input')`
  display: flex;
  margin: 1.5rem;
  margin-top: 0.5rem;
  max-width: 450px;
  border: 2px solid lightgrey;
  border-radius: 2px;
  padding-left: 15px;
  width: 90%;
  background: #fff;
  font-family: 'Roboto', sans-serif;
  height: 50px;
  transition: all 0.05s ease-in-out;
`;
export default class Search extends Component {
  state = {
    query: ``,
    results: [],
  };

  render() {
    return (
      <div>
        <label style={{ marginLeft: '1.5rem' }}>
          Search articles
          <SearchBox
            type="text"
            value={this.state.query}
            onChange={this.search}
          />
        </label>
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
