import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Search from '../components/search';
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
    </Layout>
  );
}
