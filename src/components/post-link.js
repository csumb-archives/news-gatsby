import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const LinkText = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
`;

const PostLink = ({ post }) => {
  const strippedExcerpt = post.excerpt.replace(/(<([^>]+)>)/gi, '');
  const excerpt =
    strippedExcerpt.length >= 200
      ? `${strippedExcerpt.slice(0, 200)}...`
      : strippedExcerpt;
  return (
    <div>
      <LinkText to={`/articles/${post.frontmatter.slug}`}>
        {post.frontmatter.title}
      </LinkText>
      <p style={{ marginTop: '3px' }}>{excerpt}</p>
    </div>
  );
};
export default PostLink;
