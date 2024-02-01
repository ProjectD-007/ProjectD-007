import React from 'react';
import Loader from '../../utils/Loader/Loader';

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
  return (
    <>
      <React.Suspense fallback={<Loader />}>
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
