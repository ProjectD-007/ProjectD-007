import {
  FormControl,
  FormLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';

export default function Input(props) {
  const { name, label, required, ...rest } = props;

  return (
    <FormControl sx={{ my: 1, gap: 1 }}>
      <FormLabel component={'label'} htmlFor={name}>
        {label}{' '}
        {required && (
          <Typography component={'span'} color={'error.main'}>
            *
          </Typography>
        )}
      </FormLabel>
      <OutlinedInput name={name} {...rest} />
    </FormControl>
  );
}
