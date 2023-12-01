import { Menu } from '@mui/icons-material';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
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
            maxWidth: '99%',
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

          {icons.map(({ icon, props }, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <Typography
                    component={'img'}
                    variant='img'
                    src={icon}
                    {...props}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
}
