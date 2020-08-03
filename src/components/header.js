import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const GithubLink = styled('h5')`
  margin: 20px 0;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#112e51`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      <GithubLink style={{ color: 'white' }}>
        <a href="https://github.com/csumb-archives/news-gatsby">
          <FaGithub /> View source code
        </a>
      </GithubLink>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
