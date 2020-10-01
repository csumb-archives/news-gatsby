import React, { useState, useEffect } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';

const Search = () => {
  const [results, setResults] = useState([]);
  const searchQuery =
    new URLSearchParams(location.search).get('keywords') || '';

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then((lunr) => {
        const refs = lunr.en.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);
        setResults(posts);
      });
    }
  }, [location.search]);

  return (
    <Layout>
      <SEO title="Home" />
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
    </Layout>
  );
};

export default Search;
