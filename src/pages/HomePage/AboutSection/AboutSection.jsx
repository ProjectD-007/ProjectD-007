import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { aboutScreen } from './Data';

import { HiArrowLongRight } from 'react-icons/hi2';

import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <>
      <Grid container justifyContent={'center'} alignItems={'center'} mt={6}>
        <Grid item xs={12} sm={5} textAlign={'center'}>
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

        <Grid item xs={12} sm={8}>
          <Stack direction={'row'} spacing={3}>
            {aboutScreen.map((box) => {
              return (
                <>
                  <Stack
                    direction={'column'}
                    className={styles.highlightBox}
                    textAlign={'left'}
                  >
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
                      variant="p"
                      color={'secondary.light'}
                    >
                      Whether you're living in India or abroad, easily connect
                      with country's top doctors in all specialty areas
                    </Typography>

                    <Button
                      variant="text"
                      size="medium"
                      endIcon={
                        <IconButton>
                          <HiArrowLongRight />
                        </IconButton>
                      }
                    >
                      Connect
                    </Button>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
