import { Link } from 'react-router-dom';
import './Hero.scss';
import { useState } from 'react';

function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section className="hero">
      <div className={active ? 'video-wrapper active' : 'video-wrapper'}>
        <button onClick={() => setActive(false)}>&#10005;</button>
        <video controls src="/assets/ocean.mp4"></video>
      </div>

      <section className="inner-section">
        <div className="container">
          <span>Make it simple</span>
          <h1>We make digital business simple</h1>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum laudantium odio at iure eos! Illum sed perspiciatis qui amet
            dolore, similique praesentium quas fugiat enim eius fuga maxime
            officia!
          </div>
          <div className="buttons-wrapper">
            <Link to="/">
              Explore more <span>&#10132;</span>
            </Link>
            <button onClick={() => setActive(true)}>
              <span>&#10148;</span>Watch Video
            </button>
          </div>
        </div>

        <div className="divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
    </section>
  );
}

export default Hero;
