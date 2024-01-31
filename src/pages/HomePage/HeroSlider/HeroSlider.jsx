import { Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import CommonIconButton from '../../../components/Common/CommonIconButton';

import styles from './HeroSlider.module.scss';
import WhiteBgBtn from '../../../components/Common/WhiteBgBtn';

export default function HeroSlider() {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xxl"
        sx={{ background: theme.palette.defaultGradient }}
      >
        <Grid container mt={10.8} justifyContent={'center'}>
          <Grid item xs={12} md={12} lg={8}>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
              }}
            >
              <Typography
                variant="p"
                component="p"
                color={'others.white'}
                fontWeight={600}
              >
                Order Paan items, munchies and much more on our new Dunzo Mo app
              </Typography>

              <Typography
                variant="p"
                component="p"
                color={'others.white'}
                fontWeight={600}
              >
                Download Doct4u app now{' '}
                <CommonIconButton
                  children={<NavigateNext htmlColor={'#fff'} />}
                />
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={'xxl'} className={styles.heroarea}>
        <Container maxWidth={'xl'} className={styles.wrapper}>
          <Container maxWidth="lg">
            <Grid container alignItems={'center'} mt={6}>
              <Grid item xs={12} md={6} mt={3}>
                <Typography
                  variant="h3"
                  component={'h1'}
                  fontWeight="600"
                  className={styles.title}
                  color={'text.white'}
                >
                  Consult top doctors online for any health concern
                </Typography>

                <Typography
                  variant="p"
                  component="p"
                  my={3}
                  color={'text.white'}
                >
                  Access video consultation with India’s top doctors on the
                  Practo app. Connect with doctors online, available 24/7, from
                  the comfort of your home.
                </Typography>
                <WhiteBgBtn
                  children={'Schedule call'}
                  size="large"
                  sx={{ fontWeight: 600, color: 'text.primary' }}
                  // disableElevation={true}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <img
                  src="/assets/images/homepage/heroImage.png"
                  alt=""
                  width={'100%'}
                />
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Grid container justifyContent={'center'} pb={3}>
          <Stack direction={'row'} spacing={1}>
            <Typography
              component={'img'}
              variant="span"
              src="/assets/icons/ellipse.png"
              alt="active image"
              width={'15px'}
            />
            <Typography
              component={'img'}
              variant="span"
              src="/assets/icons/ellipse-inactive.png"
              alt="active image"
              width={'15px'}
            />
            <Typography
              component={'img'}
              variant="span"
              src="/assets/icons/ellipse-inactive.png"
              alt="active image"
              width={'15px'}
            />
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
