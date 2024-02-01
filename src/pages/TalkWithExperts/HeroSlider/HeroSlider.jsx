import { Grid, Typography, useTheme } from '@mui/material';
import PrimaryBtn from '../../../components/Common/PrimaryBtn';

export default function HeroSlider() {
  const theme = useTheme();

  return (
    <Grid container bgcolor={theme.palette.heroGradient}>
      <Grid item xs={8}>
        <Typography
          component={'h1'}
          variant="h4"
          fontSize={'32px'}
          fontWeight={600}
        >
          Consult top doctors online for any health concern
        </Typography>
        <PrimaryBtn children={'Select category'} />
      </Grid>
    </Grid>
  );
}
