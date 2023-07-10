import { useLayoutEffect, useRef } from 'react';
import About from './About';
import Hero from './Hero';
import NewsSection from './NewsSection';
import Subscribe from './Subscribe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(self => {
      const techCards = self.selector('.tech-card');

      ScrollTrigger.batch(techCards, {
        start: '50% 85%',
        ease: 'none',
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            overwrite: true,
          });
        },
        onLeaveBack: batch => {
          gsap.set(batch, {
            opacity: 0,
            x: '80%',
            overwrite: true,
          });
        },
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={homeRef}>
      <Hero />
      <About />
      <NewsSection />
      <Subscribe />
    </main>
  );
}

export default Home;
