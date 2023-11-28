import React, { lazy } from 'react';

const Routes = lazy(() =>
  import(/*webpackChunkName: "App" */ './AppRoutes/Index')
);

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
