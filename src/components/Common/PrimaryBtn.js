import { Button, useTheme } from '@mui/material';

export default function PrimaryBtn({
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
        sx={{
          background: theme.palette.defaultGradient,
          ...sx,
        }}
        disabled={isDisabled}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}
