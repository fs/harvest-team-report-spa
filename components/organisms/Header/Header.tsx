import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import routes from '../../../routes';

const { Link } = routes;

const LinkCore = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link passHref route="/">
          <LinkCore>Flatstack Team Report</LinkCore>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
