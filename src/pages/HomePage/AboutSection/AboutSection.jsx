import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { aboutScreen } from './Data';

import { HiArrowLongRight } from 'react-icons/hi2';

import styles from './AboutSection.module.scss';
import { Fragment } from 'react';

export default function AboutSection() {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        mt={6}
        mb={4}
      >
        <Grid item xs={12} md={8} lg={6} textAlign={'center'}>
          <Typography
            component={'h3'}
            variant="h3"
            className={styles.title}
            color={'secondary'}
            fontWeight={600}
          >
            Consult top{' '}
            <Typography component={'span'} variant="span" color={'primary'}>
              doctors
            </Typography>{' '}
            online for any health concern
          </Typography>

          <Typography
            component={'h6'}
            variant="h6"
            color={'secondary.light'}
            my={3}
          >
            Private online consultations with verified doctors in all
            specialists
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'} mb={4} p={2}>
        <Grid item xs={12} lg={8}>
          <Stack
            gap={2}
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
                  <Box className={styles.highlightBox} p={3} borderRadius={5}>
                    <Typography
                      component={'img'}
                      src={'/assets/images/profile.svg'}
                      alt="Title name here"
                      width={'80px'}
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
                      sx={{ fontWeight: 600 }}
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
