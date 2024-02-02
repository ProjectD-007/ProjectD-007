import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

export default function DocInfo() {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Typography
        component={'img'}
        src="/assets/images/consult/doctors.png"
        alt="Doctor"
      />

      <Stack direction={'row'} alignItems={'center'} spacing={1} mb={2}>
        <Button
          variant="outlined"
          sx={{
            padding: '3px 10px',
            fontSize: '12px',
            borderRadius: 1,
            color: theme.palette.text.primary,
          }}
        >
          Outlined
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: '3px 10px',
            fontSize: '12px',
            borderRadius: 1,
            color: theme.palette.text.primary,
          }}
        >
          Outlined
        </Button>

        <Typography
          component={'span'}
          fontSize={14}
          color={'primary.main'}
          fontWeight={700}
        >
          Dr Neeraj
        </Typography>
      </Stack>

      <Stack direction={'column'} rowGap={1}>
        <Typography
          component={'span'}
          fontSize={'14px'}
          color={theme.palette.text.dark}
          fontWeight={600}
        >
          MBBS, MD - Dermatology
        </Typography>

        <Typography
          component={'span'}
          fontSize={'13px'}
          color={theme.palette.text.light}
          fontWeight={500}
        >
          30 Years Experience Overall (9 years as specialist)
        </Typography>

        <Typography
          component={'span'}
          fontSize={'14px'}
          color={theme.palette.primary.main}
          fontWeight={600}
        >
          ₹ 36/min
        </Typography>
      </Stack>

      <Stack
        direction={'row'}
        spacing={2}
        alignItems={'center'}
        justifyContent={'flex-end'}
      >
        <Button
          variant="outlined"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Chat
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            background: theme.palette.misc.success,
            color: theme.palette.others.white,
          }}
        >
          Call
        </Button>
      </Stack>
    </Grid>
  );
}
