import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  const rawExcerpt = post.excerptAst.children[0].children[0].children[0].value;
  const strippedExcerpt = rawExcerpt.replace(/(<([^>]+)>)/gi, '');
  return (
    <div>
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      <div>{strippedExcerpt}</div>
    </div>
  );
};
export default PostLink;
