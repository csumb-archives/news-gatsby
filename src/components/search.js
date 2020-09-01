import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export default class Search extends Component {
  state = {
    query: ``,
    results: [],
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map((page) => (
            <li key={page.id}>
              <Link to={'/articles/' + page.slug}>{page.title}</Link>
              {': ' + page.html}
            </li>
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
