import { Grid, Stack, Typography } from '@mui/material';
import styles from './VetenaryBanner.module.scss';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function VetenaryBanner() {
  return (
    <>
      <Grid container id={styles.vetenaryBanner}>
        <Grid item xs={12} position={'relative'}>
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={'1rem'}
            padding={'2rem'}
            height={{ xs: '25rem', md: '30rem' }}
          >
            <Typography
              component={'h1'}
              variant="h1"
              fontSize={{ xs: '30px', sm: '50px', md: '60px', lg: '75px' }}
              fontWeight={900}
              color={'#fff'}
            >
              Online vetinary Assistance
            </Typography>

            <Typography
              component={'h4'}
              variant="h4"
              fontSize={{ xs: '16px', sm: '20px', md: '28px' }}
              fontWeight={500}
              color={'#fff'}
            >
              Personalizing the testimonial makes it easier for readers to be
            </Typography>

            <PrimaryBtn children={'Schdule call'} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
