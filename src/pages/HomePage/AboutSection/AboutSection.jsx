import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import { HiArrowLongRight } from 'react-icons/hi2';

import { aboutScreen } from './Data';

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
        <Grid item xs={12} md={8} lg={6} textAlign={'center'}>
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
        <Grid container item xs={12} lg={8} columnSpacing={5}>
          {aboutScreen.map((box, index) => {
            return (
              <Grid item xs={12} sm={3.5} key={index}>
                <Link to={box.route}>
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
                      {box.title}
                    </Typography>

                    <Typography
                      component={'p'}
                      variant="span"
                      color={'secondary.light'}
                      my={2}
                    >
                      {box.content}
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
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
