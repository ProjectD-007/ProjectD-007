import AboutSection from './AboutSection/AboutSection';
import BriefInfo from './BriefInfo/BriefInfo';
import HeroSlider from './HeroSlider/HeroSlider';
import WhatClientsSay from './WhatClientsSay/WhatClientsSay';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhatClientsSay />
      <BriefInfo />
    </>
  );
}
