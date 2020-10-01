import React, { useState } from 'react';
import styled from '@emotion/styled';
import SEO from '../components/seo';
import Layout from '../components/layout';
import SearchResults from '../components/searchResults';

const SearchBox = styled('div')`
  input {
    margin: 1.5rem;
    margin-top: 0.5rem;
    width: 60%;
    border: 2px solid lightgrey;
    border-radius: 2px;
    padding-left: 15px;
    font-family: 'Roboto', sans-serif;
    height: 50px;
    transition: all 0.05s ease-in-out;
  }
  button {
    padding: 0.5rem 0.75rem;
    background: rgb(7, 99, 59);
    color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 1.1rem;
  }
`;

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [resultsName, setResultsName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setResultsName(query);
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
        <SearchBox>
          <input
            type="search"
            id="search-input"
            name="keywords"
            aria-controls="search-results-count"
            onChange={handleChange}
            value={query}
            autoFocus
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </SearchBox>
      </form>
      {isSubmitted && (
        <SearchResults
          query={query}
          results={results}
          resultsName={resultsName}
        />
      )}
    </Layout>
  );
};

export default Search;
