import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ArticleLink from './article-link';

const SearchResults = ({ results, query, resultsName, isLoaded }) => {
  if (isLoaded) {
    if (!!results.length && query) {
      return (
        <>
          <h2>
            Found {results.length} articles for "{resultsName}"
          </h2>
          <ul>
            {results.map(({ slug, title, html }) => (
              <ArticleLink
                key={slug}
                slug={slug}
                title={title}
                excerpt={html}
              />
            ))}
          </ul>
        </>
      );
    }
    if (results.length === 0 && query) {
      return <h2>No results found for "{query}"</h2>;
    }
  } else {
    return (
      <h3
        style={{
          textAlign: 'center',
          fontWeight: '500',
        }}
      >
        Initializing search engine
        <Loader type="ThreeDots" color="#0071BC" height={60} width={60} />
      </h3>
    );
  }
};
export default SearchResults;
