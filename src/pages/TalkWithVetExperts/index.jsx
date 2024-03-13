import React from 'react';
import Loader from '../../utils/Loader/Loader';
import { Box, Container, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import HeroSlider from '../../components/Common/HeroSlider';
import { HeroSlide } from './data';
import Categories from './Categories';

export default function TalkWithVetExperts() {
  const theme = useTheme();

  return (
    <React.Suspense fallback={<Loader />}>
      <Box mt={10.8} sx={{ background: theme.palette.heroGradient }}>
        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
          <HeroSlider data={HeroSlide} />
        </Container>
      </Box>

      <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
        <Grid container justifyContent={'center'}>
          <Categories />
        </Grid>
      </Container>
    </React.Suspense>
  );
}
