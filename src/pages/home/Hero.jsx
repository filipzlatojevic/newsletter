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
          <span className="font-satisfy">Make it simple</span>
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

        {/* <div className="divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div> */}
      </section>
    </section>
  );
}

export default Hero;
