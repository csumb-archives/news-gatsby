import React from 'react';
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
    return <h2>Loading...</h2>;
  }
  return null;
};
export default SearchResults;
