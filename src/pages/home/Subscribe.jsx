import { useEffect, useState } from 'react';
import './Subscribe.scss';

function Subscribe() {
  const [error, setError] = useState(true);
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFocus = () => {
    setFocused(() => true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFocused(true);
    if (error) return;
    setIsLoading(true);

    // TODO fetch POST method, handle pending, resolve and reject state of async operations
    await simulateFetching();

    console.log(email);
    setIsLoading(false);
    e.target.reset(); // clear input field when submit

    await delay(3000);
    setMessage('');
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    email ? setError(false) : setError(true);
    emailRegex.test(email) ? setError(false) : setError(true);
  }, [email, setEmail]);

  // SIMULATE server delay, just for test project without api for post method
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // SIMULATE post fetching for subscribe section
  async function simulateFetching() {
    setMessage('');
    if (Math.random() < 0.5) {
      await delay(800);
      setMessage('Succesfuly subscribed');
    } else {
      await delay(800);
      setMessage('Something went wrong. Try again.');
    }
  }
  // END OF SIMULATE FUNCTIONS

  return (
    <section id="subscribe" className="subscribe">
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

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChangeEmail}
              onBlur={handleFocus}
              required
              placeholder="test@gmail.com"
            />
            <button disabled={isLoading} className="btn-grad" type="submit">
              Subscribe
            </button>

            <p className={`${error && focused && 'active'} err`}>
              Please, enter your email.
            </p>

            <p className="message">
              {isLoading && 'Loading...'}
              {message}
            </p>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Subscribe;
