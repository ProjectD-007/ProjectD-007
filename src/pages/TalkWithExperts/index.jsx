import React from 'react';
import Loader from '../../utils/Loader/Loader';
import { Box, Container, useTheme } from '@mui/material';
import HeroSlider from '../../components/Common/HeroSlider';
import Categories from './Categories';
import { heroData } from './mockData/TalkWithExperts';

export default function TalkWithExperts() {
  const theme = useTheme();

  return (
    <React.Suspense fallback={<Loader />}>
      <Box mt={10.8} sx={{ background: theme.palette.heroGradient }}>
        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
          <HeroSlider data={heroData} />
        </Container>
      </Box>
      <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
        <Categories />
      </Container>
    </React.Suspense>
  );
}
