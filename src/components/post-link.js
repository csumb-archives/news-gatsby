import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  const strippedExcerpt = post.excerpt.replace(/(<([^>]+)>)/gi, '');
  const excerpt =
    strippedExcerpt.length >= 150
      ? `${strippedExcerpt.slice(0, 150)}...`
      : strippedExcerpt;
  return (
    <div>
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      <div>{excerpt}</div>
    </div>
  );
};
export default PostLink;
