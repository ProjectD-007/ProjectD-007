import React from 'react';
import Loader from '../../utils/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import CommonDialog from '../../components/Common/CommonDialog';
import Signin from '../Authentication/Signin/Signin';
import { closeLogin } from '../../redux/slice/homepage/homepage';

const AboutSection = React.lazy(() => import('./AboutSection/AboutSection'));
const BlogInfo = React.lazy(() => import('./BlogInfo/BlogInfo'));
const BriefInfo = React.lazy(() => import('./BriefInfo/BriefInfo'));
const HeroSlider = React.lazy(() => import('./HeroSlider/HeroSlider'));
const VetenaryBanner = React.lazy(() =>
  import('./VetenaryBanner/VetenaryBanner')
);
const WhatClientsSay = React.lazy(() =>
  import('./WhatClientsSay/WhatClientsSay')
);

export default function HomePage() {
  const homeState = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <CommonDialog
          fullWidth={true}
          children={<Signin mode={homeState.signInMode} />}
          open={homeState.viewSignin}
          maxWidth="md"
          handleClose={() => dispatch(closeLogin())}
        />
        <HeroSlider />
        <AboutSection />
        <VetenaryBanner />
        <BriefInfo />
        <WhatClientsSay />
        <BlogInfo />
      </React.Suspense>
    </>
  );
}
