import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Search from '../components/search';
// import styled from '@emotion/styled';
// import PostLink from '../components/post-link';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={(data) => <Search searchIndex={data.siteSearchIndex.index} />}
      />
      {/* {hasSearchResults && <h5>{filteredData.length} results</h5>} */}
    </Layout>
  );
}
