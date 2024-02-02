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
      light: '#626262',
      dark: '#3C4852',
      white: '#EDEEFC',
    },

    misc: {
      success: '#00DF98',
    },

    defaultBoxShadowCards: '0px 4px 31px 0px #00000014',

    defaultGradient:
      'linear-gradient(180deg, #008687 0%, #0EA7AD 0.01%, #008D7B 100%)',
    heroGradient:
      'linear-gradient(92.04deg, rgba(253, 242, 205, 0.35) 4.86%, rgba(253, 242, 205, 0.0315) 100%)',
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
          fontWeight: 600,
          borderRadius: '8px',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& input::placeholder': {
            color: '#B7BAC3',
            fontSize: '16px',
          },
        },
        input: {
          padding: '11px 16px',
        },
      },
    },
  },
});
