import React from 'react';
import { AppBar, CssBaseline, IconButton, Toolbar } from '@mui/material';

export default function Header() {
  const handelDrawerToggle = () => {};

  return (
    <>
      <header>
        <CssBaseline />

        <AppBar component={'nav'}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open Drawer'
              edge='start'
              onClick={handelDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            ></IconButton>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
}
