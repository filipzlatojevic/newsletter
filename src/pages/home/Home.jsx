import { useLayoutEffect, useRef } from 'react';
import About from './About';
import Hero from './Hero';
import NewsSection from './NewsSection';
import Subscribe from './Subscribe';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(self => {
      const techCards = self.selector('.tech-card');
      const titleText = self.selector(
        '.font-satisfy, .title h2, .tech-title h2, .tech-title p, .title-wrapper h2, .title-wrapper div'
      );

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

      ScrollTrigger.batch(titleText, {
        start: 'center 92%',
        ease: Power2.easeOut,
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            overwrite: true,
          });
        },
        onLeaveBack: batch => {
          gsap.set(batch, {
            opacity: 0,
            y: 50,
            overwrite: true,
          });
        },
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="home" ref={homeRef}>
      <Hero />
      <About />
      <NewsSection />
      <Subscribe />
    </main>
  );
}

export default Home;
