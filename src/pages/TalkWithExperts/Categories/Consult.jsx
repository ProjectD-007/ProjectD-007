import React from 'react';
import ConsultPage from '../../../components/Common/ConsultPage';
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';

import PrimaryBtn from '../../../components/Common/PrimaryBtn';
import DocInfo from './DocInfo';

const Hero = {
  title: 'Top sex logist doctors in Doc4u',
  subTitle:
    'Personalizing the testimonial makes it easier for readers to be empathetic. Adding before and after images,.',
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const FilterIconbtn = () => {
  return (
    <IconButton
      edge="start"
      color="error"
      size="large"
      sx={{
        '&.MuiIconButton-root': {
          background: '#f1f1f1',
        },
      }}
    >
      <Box
        component={'img'}
        src="/assets/icons/filter.svg"
        alt="Filter"
        width={'15px'}
      />
    </IconButton>
  );
};

export default function Consult() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
        <Box py={4} mt={10.8}>
          <ConsultPage data={Hero} />
        </Box>

        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={4} mb={5}>
            <Stack direction={'row'} spacing={3}>
              <OutlinedInput
                type={'text'}
                placeholder="Search Doctor & category "
                startAdornment={
                  <InputAdornment position="end">
                    <FilterIconbtn />
                  </InputAdornment>
                }
                fullWidth
                sx={{
                  '&': {
                    borderRadius: '30px',
                    paddingLeft: '8px',
                    border: '1px solid #E9EEF2',
                  },
                  '& input': {
                    height: '1.5em',
                  },
                }}
              />

              <PrimaryBtn children={'Search'} />
            </Stack>

            <Stack direction={'column'} mt={3}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Stack>
          </Grid>
        </Grid>

        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
          <Grid container spacing={6} mb={3}>
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
            <DocInfo />
          </Grid>
        </Container>
      </Container>
    </>
  );
}
