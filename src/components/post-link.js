import React from 'react';
import { Link } from 'gatsby';
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
  </div>
);
export default PostLink;
