import React from 'react';
import { Container, Grid } from '@mui/material';

const HeroSlider = React.lazy(() => import('./HeroSlider/HeroSlider'));
const Loader = React.lazy(() => import('../../utils/Loader/Loader'));

export default function TalkWithExperts() {
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Container maxWidth="xxl">
          <Grid container mt={10.8} justifyContent={'center'}>
            <HeroSlider />
          </Grid>
        </Container>
      </React.Suspense>
    </>
  );
}
