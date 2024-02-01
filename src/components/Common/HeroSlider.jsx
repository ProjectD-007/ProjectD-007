import { Box, Grid, Stack, Typography } from '@mui/material';
import PrimaryBtn from './PrimaryBtn';

export default function HeroSlider() {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} md={8} lg={9} xl={9} alignSelf={'center'}>
        <Stack direction={'column'} my={2}>
          <Typography
            component={'h1'}
            variant="h4"
            fontSize={'32px'}
            fontWeight={600}
            mb={2}
          >
            Consult top doctors online for any health concern
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={'center'}
            spacing={2}
          >
            <PrimaryBtn children={'Select category'} />
            <Box
              component={'img'}
              src="/assets/icons/talk-with-experts/hero-icons.svg"
              alt="Our Experts"
              width={'6rem'}
            />
            <Typography
              component={'span'}
              color={'secondary.light'}
              fontSize={'14px'}
            >
              +132 Doctors are online
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={'row'} spacing={3}>
          <Stack direction={'row'}>
            <Box
              component={'img'}
              src="/assets/icons/talk-with-experts/hero-tick.svg"
              alt="Available services with docforu"
              width={'1rem'}
            />

            <Typography component={'span'} variant="span">
              Private online consultations
            </Typography>
          </Stack>

          <Stack direction={'row'}>
            <Box
              component={'img'}
              src="/assets/icons/talk-with-experts/hero-tick.svg"
              alt="Available services with docforu"
              width={'1rem'}
            />

            <Typography component={'span'} variant="span">
              Verified doctor
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} md={4} lg={3} xl={3}>
        <Box
          component={'img'}
          src="/assets/images/talk-with-experts/hero.webp"
          alt="Talk with Docforyou experts"
          width={'20rem'}
        />
      </Grid>
    </Grid>
  );
}
