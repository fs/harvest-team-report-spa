import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Container } from '../../../public/static/styles/commonStyledComponents';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>Flatstack Team Report</Toolbar>
    </AppBar>
  );
};

export default Header;
