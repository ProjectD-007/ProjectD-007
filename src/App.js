import React, { lazy } from 'react';
import './styles/custom.scss';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/cutomTheme';

const Routes = lazy(() =>
  import(/*webpackChunkName: "App" */ './AppRoutes/Index')
);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
