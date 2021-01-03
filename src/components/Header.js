import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar>
        <Typography variant="h6" align="center">
          React Redux Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
