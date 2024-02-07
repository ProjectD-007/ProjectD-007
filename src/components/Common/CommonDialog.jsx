import { Close } from '@mui/icons-material';
import { Dialog, IconButton, useTheme } from '@mui/material';

export default function CommonDialog({
  fullWidth = false,
  maxWidth = 'sm',
  open,
  handleClose,
  children,
}) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      aria-labelledby="responsive-dialog-title"
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          background: theme.palette.misc.light,
          color: theme.palette.others.white,

          '&:hover': {
            background: theme.palette.misc.light,
            color: theme.palette.others.white,
          },
        }}
        onClick={handleClose}
      >
        <Close />
      </IconButton>
      {children}
    </Dialog>
  );
}
