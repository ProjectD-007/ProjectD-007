import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';

import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Star,
} from '@mui/icons-material';

// import styles from './WhatClientsSay.module.scss';

export default function WhatClientsSay() {
  return (
    <>
      <Grid container justifyContent={'center'} bgcolor={'primary.light'} p={2}>
        <Grid
          container
          justifyContent={'center'}
          maxWidth={'lg'}
          columnSpacing={2}
        >
          <Grid item xs={12} md={6}>
            <Typography
              component={'img'}
              src="/assets/images/homepage/whatClientsSay.webp"
            />
          </Grid>
          <Grid item xs={12} md={6} alignSelf={'center'}>
            <Typography color={'secondary'} fontSize={'40px'} fontWeight={600}>
              What Our{' '}
              <Typography
                component={'span'}
                color={'primary'}
                fontSize={'inherit'}
                fontWeight={'inherit'}
              >
                client
              </Typography>{' '}
              say about us
            </Typography>

            <Typography color={'secondary.light'} fontSize={20}>
              Personalizing the testimonial makes it easier for readers to be
              empathetic. Adding before and after images, a company logo, or
              other imagery that demonstrates the value of the service or
              product is another way to personalize the testimonial.
            </Typography>

            <Stack direction={'row'} justifyContent={'space-between'} mt={10}>
              <Box>
                <Typography fontWeight={600} color={'secondary'}>
                  Hemanth . B
                </Typography>
                <Typography fontWeight={500} color={'secondary.light'}>
                  Customer
                </Typography>
                <IconButton size="small">
                  <Star htmlColor="#fbda09" />
                </IconButton>
                <IconButton size="small">
                  <Star htmlColor="#fbda09" />
                </IconButton>
                <IconButton size="small">
                  <Star htmlColor="#fbda09" />
                </IconButton>
                <IconButton size="small">
                  <Star htmlColor="#fbda09" />
                </IconButton>
                <IconButton size="small">
                  <Star htmlColor="#fbda09" />
                </IconButton>
              </Box>

              <Stack alignItems={'center'} flexDirection={'row'} gap={2}>
                <IconButton sx={{ borderRadius: '25px', border: '1px solid' }}>
                  <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: '25px',
                    border: '1px solid',
                    background: '#04958b',
                    color: '#fff',
                  }}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
