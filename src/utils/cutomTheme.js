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
      white: '#fff',
    },

    text: {
      primary: '#282828',
      secondary: '#B7BAC3',
      white: '#EDEEFC',
    },

    defaultBoxShadowCards: '0px 4px 31px 0px #00000014',

    defaultGradient:
      'linear-gradient(180deg, #008687 0%, #0EA7AD 0.01%, #008D7B 100%)',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingTop: '11px',
          paddingBottom: '11px',
          paddingLeft: '32px',
          paddingRight: '32px',
          fontSize: '14px',
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
