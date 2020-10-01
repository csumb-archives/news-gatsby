import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';
import SearchResults from '../components/searchResults';

const SearchBox = styled('form')`
  display: flex;
  flex-direction: column;
  input {
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
  }
`;

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query && window.__LUNR__) {
      window.__LUNR__.__loaded.then((lunr) => {
        const refs = lunr.en.index.search(query);
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);
        setResults(posts);
      });
    }
  };

  return (
    <Layout>
      <SEO title="Home" />
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search-input">
          <h1>Search articles</h1>
        </label>
        <input
          type="search"
          id="search-input"
          name="keywords"
          aria-controls="search-results-count"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          autoFocus
        />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <SearchResults query={query} results={results} />
    </Layout>
  );
};

export default Search;
