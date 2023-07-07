import { Link } from 'react-router-dom';
import './About.scss';

function About() {
  return (
    <section id="about" className="about">
      <section className="inner-section">
        <aside>
          <div className="title">
            <div className="font-satisfy">Lorem ipsum</div>
            <h2>
              <span>Our</span> focus
            </h2>
          </div>

          <div className="container">
            <div className="card">
              <img src="/assets/ocean1.webp" alt="background" />
              <h2>Customer</h2>
              <p>Lorem ipsum dolor sit amet.</p>

              <Link to="/">View Details</Link>
            </div>

            <div className="card">
              <img src="/assets/tokyo.webp" alt="background" />
              <h2>Content</h2>
              <p>Lorem ipsum dolor sit amet.</p>

              <Link to="/">Learn More</Link>
            </div>

            <div className="card">
              <img src="/assets/ocean2.webp" alt="background" />
              <h2>Touchpoints</h2>
              <p>Lorem ipsum dolor sit amet.</p>

              <Link to="/">Subscribe</Link>
            </div>
          </div>
        </aside>

        <aside>
          <div className="tech-container">
            <div className="img-wrapper">
              <div>
                <img src="/assets/xbox.jpg" alt="xbox" />
                <img src="/assets/blob.svg" className="blob" alt="" />
                <img
                  src="/assets/blob-stroke.svg"
                  className="blob-stroke"
                  alt=""
                />
              </div>
            </div>

            <div className="text-wrapper">
              <div className="tech-title">
                <div className="font-satisfy">Technologies</div>
                <h2>
                  <span>Impressing our</span> customers
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  perferendis, vero consequuntur veritatis.
                </p>
              </div>

              <div className="tech-card shadow-md">
                <div>&#10093;</div>
                <span>Consectetur</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  accusantium deserunt aperiam minus deleniti?
                </p>
              </div>

              <div className="tech-card shadow-md">
                <div>&#10093;</div>
                <span>Deleniti</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nisi eos harum, quae voluptatem vero sequi.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default About;
