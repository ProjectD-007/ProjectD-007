import { Button, useTheme } from '@mui/material';

export default function WhiteBgBtn({
  children,
  sx,
  isDisabled = false,
  ...rest
}) {
  const theme = useTheme();

  return (
    <>
      <Button
        variant={'primary'}
        disabled={isDisabled}
        {...rest}
        sx={{ background: theme.palette.others.white, ...sx }}
      >
        {children}
      </Button>
    </>
  );
}
