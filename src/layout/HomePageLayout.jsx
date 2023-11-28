import Header from '../components/HomePage/Header/Header';
import Footer from '../components/HomePage/Footer/Footer';
import { Grid } from '@mui/material';

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header />
      <Grid container>
        <main>{children}</main>
      </Grid>
      <Footer />
    </>
  );
}
