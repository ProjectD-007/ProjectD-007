import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Grid container mt={8}>
        <Grid item xs={12}>
          <Typography component={'h1'} color={'primary'} variant='h4'>
            Home Page Here
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
