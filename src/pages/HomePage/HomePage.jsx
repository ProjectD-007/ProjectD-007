import AboutSection from './AboutSection/AboutSection';
import BlogInfo from './BlogInfo/BlogInfo';
import BriefInfo from './BriefInfo/BriefInfo';
import HeroSlider from './HeroSlider/HeroSlider';
import VetenaryBanner from './VetenaryBanner/VetenaryBanner';
import WhatClientsSay from './WhatClientsSay/WhatClientsSay';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <VetenaryBanner />
      <BriefInfo />
      <WhatClientsSay />
      <BlogInfo />
    </>
  );
}
