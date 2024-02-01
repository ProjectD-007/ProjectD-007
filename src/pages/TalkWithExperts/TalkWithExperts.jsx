import React from 'react';
import Categories from './Categories';
import { Box, Container, useTheme } from '@mui/material';
const HeroSlider = React.lazy(() => import('./HeroSlider/HeroSlider'));
const Loader = React.lazy(() => import('../../utils/Loader/Loader'));

export default function TalkWithExperts() {
  const theme = useTheme();
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Box mt={10.8} sx={{ background: theme.palette.heroGradient }}>
          <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
            <HeroSlider />
          </Container>
        </Box>
        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
          <Categories />
        </Container>
      </React.Suspense>
    </>
  );
}
