import AboutSection from './AboutSection/AboutSection';
import HeroSlider from './HeroSlider/HeroSlider';
import WhatClientsSay from './WhatClientsSay/WhatClientsSay';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhatClientsSay />
    </>
  );
}
