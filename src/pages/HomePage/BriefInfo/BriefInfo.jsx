import { Grid, Typography } from '@mui/material';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function BriefInfo() {
  return (
    <>
      <Grid container justifyContent={'center'} p={2} my={6}>
        <Grid container maxWidth={'lg'}>
          <Grid item xs={12} md={6}>
            <Typography
              color={'secondary'}
              component={'h2'}
              variant="h2"
              fontWeight={600}
              fontSize={40}
              mb={2}
            >
              <Typography
                component={'span'}
                color={'primary'}
                variant="h2"
                fontWeight={'inherit'}
                fontSize={'inherit'}
              >
                +30K
              </Typography>{' '}
              Doctors Find your doctor around the world
            </Typography>

            <Typography
              component={'p'}
              variant="p"
              color={'secondary.light'}
              fontSize={20}
            >
              Personalizing the testimonial makes it easier for readers to be
              empathetic. Adding before and after images, a company logo, or
              other imagery that demonstrates the value of the service or
              product is another way to personalize the testimonial.
            </Typography>

            <PrimaryBtn
              children={'Schdule Call'}
              size="large"
              variant="contained"
              sx={{ fontWeight: 600, color: 'others', mt: 5 }}
              // disableElevation={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="img"
              component={'img'}
              src="/assets/images/homepage/briefInfo.png"
              width={'100%'}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
