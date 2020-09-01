import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const LinkText = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
`;

const ArticleLink = ({ slug, title, excerpt }) => {
  let strippedExcerpt = excerpt.replace(/(<([^>]+)>)/gi, '');
  strippedExcerpt =
    strippedExcerpt.length >= 200
      ? `${strippedExcerpt.slice(0, 200)}...`
      : strippedExcerpt;
  return (
    <div>
      <LinkText to={`/articles/${slug}`}>{title}</LinkText>
      <p style={{ marginTop: '3px' }}>{strippedExcerpt}</p>
    </div>
  );
};

export default ArticleLink;
