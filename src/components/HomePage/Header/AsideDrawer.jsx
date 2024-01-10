import { Menu } from '@mui/icons-material';
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';

export default function AsideDrawer({ list, icons }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        PaperProps={{
          sx: {
            width: '500px',
            maxWidth: '85%',
          },
        }}
      >
        <List>
          {list.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}

          <Grid item container>
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
                  />
                ) : (
                  <Box
                    component={'img'}
                    src={icon.icon}
                    {...icon.props}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Grid>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
}
