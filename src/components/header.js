import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const FlexNav = styled('div')`
        align-items: center;
        justify-content: space-between;
        display: flex;
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      }}`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#112e51`,
      marginBottom: `1.45rem`,
    }}
  >
    <FlexNav>
      <h1 style={{ margin: 0, fontSize: '1.2rem' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: '20px',
          }}
        >
          Search
        </Link>
        <Link to="/articles" style={{ color: `white`, textDecoration: `none` }}>
          Browse articles
        </Link>
      </div>
    </FlexNav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
