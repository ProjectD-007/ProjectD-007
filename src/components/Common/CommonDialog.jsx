import { Dialog } from '@mui/material';

export default function CommonDialog(props) {
  const { fullScreen, open, handleClose, children } = props;
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      {children}
    </Dialog>
  );
}
