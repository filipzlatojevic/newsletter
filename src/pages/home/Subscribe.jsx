import './Subscribe.scss';

function Subscribe() {
  return (
    <section className="subscribe">
      <section className="inner-section">
        <div className="container">
          <div className="title-wrapper">
            <h2>
              <span>Subscribe to our</span> Newsletter!
            </h2>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium, itaque!
            </div>
          </div>

          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@gmail.com"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Subscribe;
