import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';

import styles from './Header.module.scss';
import AsideDrawer from './AsideDrawer';
import { AccountBalanceWallet, Notifications } from '@mui/icons-material';
import React from 'react';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const navigationLinks = [
  { title: 'Home', active: true },
  { title: 'Talk with experts' },
  { title: 'Talk with doctor' },
  { title: 'Schedule consultation' },
];

const icons = [
  {
    MUIIcon: Notifications,
  },
  {
    MUIIcon: AccountBalanceWallet,
  },
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
    return (
      <Stack
        direction={'row'}
        spacing={2}
        ml={4}
        alignItems={'center'}
        fontSize={'2rem'}
      >
        {icons.map((icon, index) => {
          return icon?.MUIIcon ? (
            <icon.MUIIcon
              key={index}
              htmlColor="#029183"
              fontSize="inherit"
              className={'cursor_pointer'}
            />
          ) : (
            <Box
              component={'img'}
              src={icon.icon}
              {...icon.props}
              key={index}
              className="cursor_pointer"
            />
          );
        })}
      </Stack>
    );
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          component={'nav'}
          sx={{ backgroundColor: theme.palette.primary.light }}
        >
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
                    variant="img"
                    component={'img'}
                    src="/assets/images/logo.webp"
                  />
                </Box>

                {!isMatch ? (
                  <Stack
                    direction={'row'}
                    component={'nav'}
                    className={styles.navigation}
                  >
                    <List
                      sx={{
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {navigationLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          id={item?.active && 'activeLinkColor'}
                          color="secondary"
                          sx={{
                            fontSize: '16px',
                            fontWeight: 600,
                            width: 'auto',
                          }}
                        >
                          {item.title}
                        </ListItem>
                      ))}

                      {RenderIcons()}
                    </List>
                  </Stack>
                ) : (
                  <AsideDrawer list={navigationLinks} icons={icons} />
                )}
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
