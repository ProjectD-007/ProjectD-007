import {
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
  OutlinedInput,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import CommonButton from '../../Common/CommonButton';

import { Person } from '@mui/icons-material';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';

const StyledOutlineInput = styled(OutlinedInput)(() => ({
  '& input': {
    padding: '11px auto',
  },
  '&': {
    border: '1px solid #FFFFFF3D',
    borderRadius: '15px',
  },
  '& fieldset': {
    border: '1px solid #FFFFFF3D',
  },
}));

const ListSubheaderItem = styled(ListSubheader)(() => ({
  '&.MuiListSubheader-sticky': {
    background: 'transparent',
    padding: 0,
  },
}));

const StyledListItem = styled(ListItem)(() => ({
  '&': {
    color: '#fff',
    padding: '5px 0px',
  },
}));

export default function Footer() {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        bgcolor={'primary.main'}
        py={3}
        px={2}
      >
        <Grid
          container
          alignItems={'center'}
          sx={{
            justifyContent: {
              xs: 'center',
              md: 'space-between',
            },
            textAlign: {
              xs: 'center',
              md: 'left',
            },
            maxWidth: {
              lg: 'lg',
              xl: 'xl',
            },
          }}
        >
          <Grid item xs={12} md={6} sx={{ mb: { xs: 2, md: 'unset' } }}>
            <Typography
              variant="p"
              component={'p'}
              color={'others.main'}
              fontWeight={600}
              fontSize={20}
            >
              Join our newsletter to keep up to date with us!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={'flex'}
            gap={1}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <StyledOutlineInput
              startAdornment={<Person htmlColor="#FFFFFF3D" />}
            />
            <CommonButton
              children="Subscribe"
              color="others"
              size="medium"
              sx={{ py: '0.6rem', px: '2rem', fontWeight: 600 }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} my={5}>
            <Divider
              variant="middle"
              sx={{ background: '#FFFFFF3D' }}
              light={true}
            />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            maxWidth: {
              lg: 'lg',
              xl: 'xl',
            },
          }}
          p={2}
        >
          <Grid item xs={12} sm={7} lg={8}>
            <Stack>
              <Typography
                variant="img"
                component={'img'}
                src="/assets/images/homepage/footer.png"
                width={'40px'}
              />

              <Typography
                variant="h6"
                component={'span'}
                fontWeight={600}
                color={'others.main'}
              >
                Doc4u
              </Typography>

              <Typography
                variant="span"
                component={'span'}
                color={'others.main'}
                my={3}
              >
                We growing up your business with personal AI manager.
              </Typography>

              <Stack direction={'row'} spacing={1}>
                <FaFacebookF color="white" />

                <FaTwitter color="white" />

                <FaLinkedinIn color="white" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={5} lg={4}>
            <Stack direction={'row'} gap={3}>
              <Stack direction={'column'}>
                <List
                  component={'nav'}
                  subheader={
                    <ListSubheaderItem component={'div'}>
                      Platform
                    </ListSubheaderItem>
                  }
                >
                  <StyledListItem disablePadding>
                    Plans & Pricing
                  </StyledListItem>
                  <StyledListItem disablePadding>
                    Personal AI Manager
                  </StyledListItem>
                  <StyledListItem disablePadding>
                    AI Business Writer
                  </StyledListItem>
                </List>
              </Stack>

              <Stack direction={'column'}>
                <List
                  component={'nav'}
                  subheader={
                    <ListSubheaderItem component={'div'}>
                      Company
                    </ListSubheaderItem>
                  }
                >
                  <StyledListItem disablePadding>Blog</StyledListItem>
                  <StyledListItem disablePadding>Careers</StyledListItem>
                  <StyledListItem disablePadding>News</StyledListItem>
                </List>
              </Stack>

              <Stack direction={'column'}>
                <List
                  component={'nav'}
                  subheader={
                    <ListSubheaderItem component={'div'}>
                      Resources
                    </ListSubheaderItem>
                  }
                >
                  <StyledListItem disablePadding>Documentation</StyledListItem>
                  <StyledListItem disablePadding>Papers</StyledListItem>
                  <StyledListItem disablePadding>
                    Press Conferences
                  </StyledListItem>
                </List>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} my={5}>
            <Divider
              variant="middle"
              sx={{ background: '#FFFFFF3D' }}
              light={true}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid
            item
            display={'flex'}
            // gap={1}
            // sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
          >
            <Typography
              component={'span'}
              variant="span"
              color={'others.white'}
            >
              Terms of Service
            </Typography>

            <Typography
              component={'span'}
              variant="span"
              px={3}
              color={'others.white'}
            >
              Privacy Policy
            </Typography>

            <Typography
              component={'span'}
              variant="span"
              color={'others.white'}
            >
              Cookies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
