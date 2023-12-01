import { useTheme } from '@mui/material';
import React, { lazy } from 'react';
import './styles/custom.scss';

const Routes = lazy(() =>
  import(/*webpackChunkName: "App" */ './AppRoutes/Index')
);

export default function App() {
  const theme = useTheme();

  return (
    <>
      <Routes />
    </>
  );
}
