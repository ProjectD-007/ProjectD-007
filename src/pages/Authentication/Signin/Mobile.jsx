import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  useTheme,
} from '@mui/material';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function Mobile({ onChange }) {
  const theme = useTheme();

  return (
    <>
      <FormControl sx={{ gap: 1 }}>
        <FormLabel component={'label'}>
          Phone number{' '}
          <Typography component={'span'} color={'text.danger'}>
            *
          </Typography>
        </FormLabel>
        <OutlinedInput
          sx={{
            '&.MuiOutlinedInput-root': {
              paddingLeft: 0,
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <Box
                  component={'img'}
                  src="/assets/icons/flag.svg"
                  alt="Country Flag"
                />
              </IconButton>

              <Typography
                component={'span'}
                variant="span"
                fontSize={'14px'}
                fontWeight={400}
              >
                +91
              </Typography>
            </InputAdornment>
          }
          placeholder="Phone number"
        />
        <FormHelperText sx={{ m: 0, color: theme.palette.secondary.light }}>
          We’ll send an OTP for verification
        </FormHelperText>
      </FormControl>

      <PrimaryBtn children={'Send OTP'} fullWidth sx={{ my: 2 }} />
      <Typography textAlign={'center'} fontSize={'14px'} fontWeight={500}>
        Continue with{' '}
        <Typography
          component={'span'}
          variant="span"
          fontWeight={600}
          style={{
            color: '#008687',
          }}
          onClick={() => onChange('password')}
        >
          password{' '}
        </Typography>
      </Typography>
    </>
  );
}
