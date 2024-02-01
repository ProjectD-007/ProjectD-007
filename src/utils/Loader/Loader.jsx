import { Box, Stack } from '@mui/material';
import styles from './loader.module.scss';

export default function Loader() {
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      className={styles.loaderArea}
    >
      <Box className={styles.spinner}>
        Loading
        <Box
          component={'div'}
          className={`${styles['spinner-sector']} ${styles['spinner-sector-red']}`}
        />
        <Box
          component={'div'}
          className={`${styles['spinner-sector']} ${styles['spinner-sector-blue']}`}
        />
        <Box
          component={'div'}
          className={`${styles['spinner-sector']} ${styles['spinner-sector-green']}`}
        />
      </Box>
    </Stack>
  );
}
