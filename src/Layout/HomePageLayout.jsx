import Header from '../Components/HomePage/Header/Header';
import Footer from '../Components/HomePage/Footer/Footer';

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
