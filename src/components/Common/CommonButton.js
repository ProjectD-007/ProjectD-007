import { Button } from '@mui/material';

export default function CommonButton({
  children,
  sx,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  isDisabled = false,
  ...rest
}) {
  return (
    <>
      <Button
        variant={variant}
        sx={sx}
        size={size}
        disabled={isDisabled}
        color={color}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}
