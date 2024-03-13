import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { categories } from '../data';

const StyledCard = styled(Card)({
  '&.MuiPaper-root': {
    boxShadow: '0px 0px 25px 0px #0000000A',
  },
});

export default function Categories() {
  return (
    <Grid container my={3}>
      <Grid item xs={12} my={5}>
        <Stack direction={'column'} alignItems={'center'}>
          <Typography
            component={'h1'}
            variant="h3"
            fontSize={'32px'}
            color={'secondary.main'}
            fontWeight={700}
            mb={2}
          >
            Take Online Doctor Consultation
          </Typography>
          <Typography
            component={'p'}
            variant="p"
            fontSize={'20px'}
            color={'secondary.light'}
            fontWeight={400}
          >
            Personalizing the testimonial makes it easier for readers to be
            empathetic. Adding before and after images,.
          </Typography>
        </Stack>
      </Grid>

      <Grid
        container
        rowSpacing={6}
        columnSpacing={6}
        justifyContent={'center'}
      >
        {categories.map((category) => {
          return (
            <Grid item xs={12} md={2} key={category.id}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component={'img'}
                    image={category.imgPath}
                    alt={category.title}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={'20px'}
                      color={'secondary.main'}
                    >
                      {category.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
