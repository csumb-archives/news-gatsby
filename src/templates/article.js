import React from 'react';

export default function Template({ pageContext}) {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{pageContext.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: pageContext.html }}
        />
      </div>
    </div>
  );
}