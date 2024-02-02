import React from 'react';
import Categories from './Categories';
import { Box, Container, useTheme } from '@mui/material';
import Loader from '../../utils/Loader/Loader';
import { heroData } from './mockData/TalkWithExperts';

const HeroSlider = React.lazy(() =>
  import('../../components/Common/HeroSlider')
);

export default function TalkWithDoctors() {
  const theme = useTheme();

  return (
    <>
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
    </>
  );
}
