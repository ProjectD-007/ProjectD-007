import React from 'react';
import ConsultPage from '../../../components/Common/ConsultPage';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
} from '@mui/material';

import PrimaryBtn from '../../../components/Common/PrimaryBtn';
import DocInfo from './DocInfo';

const Hero = {
  title: 'Top sex logist doctors in Doc4u',
  subTitle:
    'Personalizing the testimonial makes it easier for readers to be empathetic. Adding before and after images,.',
};

const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    padding: '8px 30px 7px 10px',
    borderRadius: '30px',
  },
});

const FilterIconbtn = () => {
  return (
    <IconButton
      edge="start"
      color="error"
      size="large"
      sx={{
        '&.MuiIconButton-root': {
          background: '#f1f1f1',
        },
      }}
    >
      <Box
        component={'img'}
        src="/assets/icons/filter.svg"
        alt="Filter"
        width={'15px'}
      />
    </IconButton>
  );
};

export default function Consult() {
  const availLanguages = [
    'All',
    'English',
    'Hindi',
    'Malayalam',
    'Kannada',
    'Tamil',
  ];

  return (
    <>
      <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
        <Box py={4} mt={10.8}>
          <ConsultPage data={Hero} />
        </Box>

        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={4} mb={6}>
            <Stack direction={'row'} spacing={3}>
              <OutlinedInput
                type={'text'}
                placeholder="Search Doctor & category "
                startAdornment={
                  <InputAdornment position="end">
                    <FilterIconbtn />
                  </InputAdornment>
                }
                fullWidth
                sx={{
                  '&': {
                    borderRadius: '30px',
                    paddingLeft: '8px',
                    border: '1px solid #E9EEF2',
                  },
                  '& input': {
                    height: '1.5em',
                  },
                }}
              />

              <PrimaryBtn children={'Search'} />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={10} mb={4}>
            <Stack direction={'row'} spacing={3} justifyContent={'center'}>
              {availLanguages.map((lang) => (
                <StyledButton
                  variant="outlined"
                  sx={{ color: 'secondary.light' }}
                  startIcon={
                    <Box
                      component={'img'}
                      src="/assets/icons/consult/hindi.svg"
                      alt="Consult Doc4u in Hindi"
                      sx={{ p: 0, mr: 0.5 }}
                    />
                  }
                >
                  {lang}
                </StyledButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
          <Grid container spacing={6} mb={3}>
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
          </Grid>
        </Container>
      </Container>
    </>
  );
}
