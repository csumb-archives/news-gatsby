import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const LinkText = styled(Link)`
  font-size: 1.2rem;
  font-weight: 00;
`;

const PostLink = ({ post }) => {
  const strippedExcerpt = post.excerpt.replace(/(<([^>]+)>)/gi, '');
  const excerpt =
    strippedExcerpt.length >= 150
      ? `${strippedExcerpt.slice(0, 150)}...`
      : strippedExcerpt;
  return (
    <div>
      <LinkText to={post.frontmatter.slug}>{post.frontmatter.title}</LinkText>
      <p>{excerpt}</p>
    </div>
  );
};
export default PostLink;
