import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import styles from './Header.module.scss';
import { useTheme } from '@emotion/react';
import AsideDrawer from './AsideDrawer';

const navigationLinks = [
  { title: 'Home', active: true },
  { title: 'Talk with experts' },
  { title: 'Talk with doctor' },
  { title: 'Schedule consultation' },
];

const icons = [
  { icon: '/assets/images/notification-bell.svg' },
  { icon: '/assets/images/wallet.svg' },
  {
    icon: '/assets/images/profile.svg',
    props: {
      width: '40px',
    },
  },
];

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('985'));

  const RenderIcons = () => {
    return icons.map((icon, index) => (
      <Typography component={'li'} variant='li' key={index}>
        <Typography
          component={'img'}
          src={icon.icon}
          {...icon.props}
          key={index}
        />
      </Typography>
    ));
  };

  return (
    <>
      <CssBaseline />
      <AppBar component={'nav'} sx={{ backgroundColor: '#F4FFFB' }}>
        <Toolbar>
          <Container
            sx={{
              maxWidth: {
                lg: 'lg',
                xl: 'xl',
              },
            }}
            className={styles.headerArea}
          >
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box className={styles.logoArea}>
                <Typography
                  variant='img'
                  component={'img'}
                  src='/assets/images/logo.webp'
                />
              </Box>

              {!isMatch ? (
                <Box component={'nav'} className={styles.navigation}>
                  <Typography component={'ul'} variant='ul'>
                    {navigationLinks.map((item, index) => (
                      <Typography
                        component={'li'}
                        variant='li'
                        key={index}
                        id={item?.active && 'activeLinkColor'}
                      >
                        {item.title}
                      </Typography>
                    ))}

                    {RenderIcons()}
                  </Typography>
                </Box>
              ) : (
                <AsideDrawer list={navigationLinks} icons={icons} />
              )}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
