import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer id="contact">
      <section className="inner-section">
        <div className="container">
          <div className="title">
            <div className="font-satisfy">Lorem ipsum dolor.</div>
            <h2>
              <span>Contact us.</span>
              <br />
              Let&apos;s Talk.
            </h2>
          </div>

          <div className="resource block">
            <h3>Resource</h3>
            <Link to="/#about">About Us</Link>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
          </div>

          <div className="location block">
            <h3>Where we are</h3>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
          </div>

          <div className="info block">
            <h3>Our contact info</h3>
            <button
              type="button"
              onClick={e => {
                window.location.href = 'mailto:testproject@asioso.com';
                e.preventDefault();
              }}>
              &#9993; testproject@asioso.com
            </button>
            <span>&#9990; 0123 456 789</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
