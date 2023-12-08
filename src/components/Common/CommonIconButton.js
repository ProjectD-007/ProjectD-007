import { IconButton } from '@mui/material';

export default function CommonIconButton({ children, size, sx }) {
  return (
    <>
      <IconButton size={size} sx={sx}>
        {children}
      </IconButton>
    </>
  );
}
