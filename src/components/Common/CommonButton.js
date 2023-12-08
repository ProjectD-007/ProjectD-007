import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)({
  '.MuiButton-root': {
    textTransform: 'capitalize',
    color: 'red',
  },
});

export default function CommonButton({
  children,
  sx,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  isDisabled = false,
}) {
  return (
    <>
      <StyledButton
        variant={variant}
        sx={sx}
        size={size}
        disabled={isDisabled}
        color={color}
      >
        {children}
      </StyledButton>
    </>
  );
}
