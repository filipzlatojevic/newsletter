import { Link } from 'react-router-dom';
import './Hero.scss';
import { useState, useLayoutEffect, useRef } from 'react';
import { Power1, gsap } from 'gsap';

function Hero() {
  const [active, setActive] = useState(false);
  const container = useRef(null);
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { ease: Power1.easeInOut } })
        .to('.gsap-text', {
          opacity: 1,
          y: 0,
          stagger: 0.35,
          duration: 0.6,
        })
        .to('.buttons-wrapper', { opacity: 1, duration: 0.8 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero">
      <div className={active ? 'video-wrapper active' : 'video-wrapper'}>
        <button onClick={() => setActive(false)}>&#10005;</button>
        <video controls src="/assets/ocean.mp4"></video>
      </div>

      <section className="inner-section">
        <div ref={container} className="container">
          <div className="gsap-text-wrapper">
            <span className="gsap-text font-satisfy">Make it simple</span>
          </div>
          <div className="gsap-text-wrapper">
            <h1 className="gsap-text">We make digital business simple</h1>
          </div>
          <div className="gsap-text-wrapper">
            <div className="gsap-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              nostrum laudantium odio at iure eos! Illum sed perspiciatis qui
              amet dolore, similique praesentium quas fugiat enim eius fuga
              maxime officia!
            </div>
          </div>
          <div className="buttons-wrapper">
            <Link to="">
              Explore more <span>&#10132;</span>
            </Link>
            <button onClick={() => setActive(true)}>
              <span>&#10148;</span>Watch Video
            </button>
          </div>
        </div>

        <div className="divider-bottom">
          <svg
            viewBox="0 0 1250 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              d="M1000.19 141.048C912.807 193.244 872.053 219.078 787.166 256.58C731.833 275.949 690.094 299.696 548.971 322.93C490.247 332.598 386.019 345.322 327.133 354.216C217.71 370.555 104.864 362.263 0.833008 330.239V406.603H1219.17V0.660156C1163.21 44.7559 1087.58 88.8516 1000.19 141.048Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
    </section>
  );
}

export default Hero;
