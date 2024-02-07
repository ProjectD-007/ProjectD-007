import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';

export default function CommonMode({ onChange, children, mode }) {
  const theme = useTheme();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction={'row'}>
            <Box
              className="aside"
              sx={{ background: theme.palette.defaultGradient }}
              py={{ xs: 2, sm: 15 }}
              flex={1}
            >
              <Stack
                direction={'column'}
                textAlign={'center'}
                rowGap={3}
                sx={{ width: '80%', margin: '0 auto' }}
              >
                <Box
                  component={'img'}
                  src="/assets/images/authentication/signin/aside.webp"
                  alt="Sign in with Doc4you"
                />

                <Box>
                  <Typography
                    component={'h3'}
                    variant="h3"
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'text.white'}
                    my={1}
                  >
                    Over{' '}
                    <Typography
                      component={'span'}
                      fontWeight={800}
                      fontSize={'20px'}
                    >
                      10 crore Doctors
                    </Typography>{' '}
                    trust us for their
                  </Typography>

                  <Typography
                    component={'p'}
                    variant="p"
                    fontSize={'14px'}
                    color={'text.white'}
                  >
                    Access 3,00,000+ live classes, test series, courses and more
                    for free
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box
              className="authform"
              bgcolor={'others.white'}
              py={{ xs: 2, sm: 15 }}
              flex={1}
            >
              <Stack
                direction={'column'}
                sx={{ width: '80%', margin: '0 auto' }}
              >
                {mode === 'create' ? (
                  <>
                    <Typography
                      component={'h3'}
                      variant="h3"
                      fontSize={'24px'}
                      color={'text.primary'}
                      fontWeight={700}
                    >
                      Create a Doc4u Account
                    </Typography>

                    <Typography
                      component={'h4'}
                      variant="h4"
                      fontSize={'14px'}
                      color={'text.light'}
                      fontWeight={500}
                      my={2}
                    >
                      Already have an account?
                      <Typography
                        component={'span'}
                        variant="span"
                        sx={{
                          fontWeight: 400,
                          color: '#008687',
                          textDecoration: 'underline',
                        }}
                        onClick={() => onChange('mobile')}
                      >
                        login
                      </Typography>
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      component={'h3'}
                      variant="h3"
                      fontSize={'24px'}
                      color={'text.primary'}
                      fontWeight={700}
                    >
                      Log In
                    </Typography>

                    <Typography
                      component={'h4'}
                      variant="h4"
                      fontSize={'14px'}
                      color={'text.light'}
                      fontWeight={500}
                      my={2}
                    >
                      New to Doc4you?
                      <Typography
                        component={'span'}
                        variant="span"
                        sx={{
                          fontWeight: 400,
                          color: '#008687',
                          textDecoration: 'underline',
                        }}
                        onClick={() => onChange('create')}
                      >
                        Create a account
                      </Typography>
                    </Typography>
                  </>
                )}
                {children}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
