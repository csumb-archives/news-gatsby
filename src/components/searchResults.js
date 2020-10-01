import React from 'react';
import ArticleLink from './article-link';

const SearchResults = ({ results, query }) => {
  console.log(query);
  return (
    !!results.length &&
    query && (
      <>
        <h2>
          Found {results.length} articles for "{query}"
        </h2>
        <ul>
          {results.map(({ slug, title, html }) => (
            <ArticleLink slug={slug} title={title} excerpt={html} />
          ))}
        </ul>
      </>
    )
  );
};

export default SearchResults;
