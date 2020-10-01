import React from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';

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

const SearchForm = ({ query }) => (
  <SearchBox role="search" method="GET">
    <label htmlFor="search-input">
      <h1>Search articles</h1>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={(e) =>
        navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
    />
  </SearchBox>
);
export default SearchForm;
