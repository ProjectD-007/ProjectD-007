import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#008687',
      light: '#F4FFFB',
    },
    secondary: {
      main: '#282828',
      light: '#626262',
    },

    others: {
      main: '#F4FFFB',
      white: '#fff',
    },

    text: {
      primary: '#282828',
      secondary: '#B7BAC3',
      white: '#EDEEFC',
    },

    buttonBackgrounds: {
      primary: 'yellow',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '11px 16px',
        },
      },
    },
  },
});
