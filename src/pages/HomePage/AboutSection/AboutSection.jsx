import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import { aboutScreen } from './Data';

import { HiArrowLongRight } from 'react-icons/hi2';

import { Fragment } from 'react';

export default function AboutSection() {
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        mt={6}
        mb={4}
      >
        <Grid item xs={12} md={8} lg={4} textAlign={'center'}>
          <Typography
            component={'h3'}
            variant="h3"
            color={'secondary'}
            fontWeight={600}
            mb={2}
          >
            Whole-patient, high-quality virtual primary care
          </Typography>

          <Typography component={'h6'} variant="h6" color={'secondary.light'}>
            Private online consultations with verified doctors in all
            specialists
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'} mb={4} p={2}>
        <Grid item xs={12} lg={8}>
          <Stack
            gap={6}
            sx={{
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            {aboutScreen.map((box, index) => {
              return (
                <Fragment key={index}>
                  <Box
                    p={3}
                    borderRadius={5}
                    boxShadow={theme.palette.defaultBoxShadowCards}
                  >
                    <Typography
                      component={'img'}
                      src={box.icon}
                      alt="Title name here"
                      width={'80px'}
                      mb={2}
                    />

                    <Typography
                      component={'h5'}
                      variant="h5"
                      fontWeight={600}
                      color={'secondary'}
                    >
                      Talk With Experts
                    </Typography>

                    <Typography
                      component={'p'}
                      variant="span"
                      color={'secondary.light'}
                      my={2}
                    >
                      Whether you're living in India or abroad, easily connect
                      with country's top doctors in all specialty areas
                    </Typography>

                    <Button
                      variant="text"
                      size="large"
                      endIcon={<HiArrowLongRight />}
                      sx={{ fontWeight: 600, p: 0 }}
                    >
                      Connect
                    </Button>
                  </Box>
                </Fragment>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
