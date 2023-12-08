import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import CommonIconButton from '../components/Common/CommonIconButton';

import styles from './HomePage.module.scss';
import CommonButton from '../components/Common/CommonButton';

export default function HomePage() {
  return (
    <>
      <Container maxWidth="xxl" sx={{ left: 'auto' }} id={styles.screenTopBar}>
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

      <Container maxWidth={'lg'}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h3" component={'h3'}>
                Consult top doctors online for any health concern
              </Typography>

              <Typography variant="p" component={'p'}>
                Access video consultation with India’s top doctors on the Practo
                app. Connect with doctors online, available 24/7, from the
                comfort of your home.
              </Typography>
              <CommonButton
                children={'Schedule call'}
                size="large"
                color="others"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
