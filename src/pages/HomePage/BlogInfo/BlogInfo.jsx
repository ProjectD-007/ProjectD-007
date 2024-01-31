import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { BlogData } from './Data';

export default function BlogInfo() {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        textAlign={'center'}
        p={2}
        py={6}
      >
        <Grid container justifyContent={'center'} mb={5}>
          <Grid item xs={12} md={8} lg={5.5} xl={4.5}>
            <Stack direction={'row'} spacing={2}>
              <Typography
                component={'img'}
                src="/assets/icons/homepage/talk-with-experts.svg"
                width={'70px'}
                alignSelf={'flex-end'}
              />

              <Box>
                <Typography
                  component={'h2'}
                  variant="h3"
                  fontSize={40}
                  fontWeight={600}
                  color={'secondary'}
                  mb={2}
                >
                  Our Product related Blog
                </Typography>

                <Typography
                  variant="p"
                  component={'p'}
                  color={'secondary.light'}
                >
                  Personalizing the testimonial makes it easier for readers to
                  be empathetic. Adding before and after images,.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container justifyContent={'center'} gap={3}>
          {BlogData.map((data, index) => {
            return (
              <Grid item xs={12} md={3} lg={3} key={index}>
                <Box>
                  <Card>
                    <Typography
                      variant="img"
                      component={'img'}
                      src={data.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {data.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
