import { Link } from 'react-router-dom';
import './News.scss';

function News() {
  return (
    <section className="news">
      <section className="inner-section">
        <div className="title">
          <div>Lorem</div>
          <h2>
            <span>News and</span> trends
          </h2>
        </div>

        {/* POSTS */}
        <div className="container">
          <div className="card shadow-md">
            <div className="img-wrapper">
              <img src="/assets/tokyo.webp" alt="background" />
              <div />
              <Link to="/" />
            </div>

            <div className="text-wrapper">
              <Link className="button-grad" to="/">
                See more
              </Link>
              <span>category</span>

              <h3>How a progresive web app works</h3>

              <p>
                asdfasdfasdf asdfasfasdf asdf asd f Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="card shadow-md">
            <div className="img-wrapper">
              <img src="/assets/tokyo.webp" alt="background" />
              <div />
            </div>

            <div className="text-wrapper">
              <span className="category">category</span>

              <h3>How a progresive web app works</h3>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="card shadow-md">
            <div className="img-wrapper">
              <img src="/assets/tokyo.webp" alt="background" />
              <div />
            </div>

            <div className="text-wrapper">
              <span className="category">category</span>

              <h3>How a progresive web app works</h3>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="card shadow-md">
            <div className="img-wrapper">
              <img src="/assets/tokyo.webp" alt="background" />
              <div />
            </div>

            <div className="text-wrapper">
              <span className="category">category</span>

              <h3>How a progresive web app works</h3>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default News;
