import './NewsSection.scss';
import { newsService } from '../../services/newsService';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

function NewsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('');

  const fetchNews = async (cat, limit) => {
    setIsLoading(true);

    const data = await newsService.getNews(cat, limit);
    setNews(data.articles);

    setIsLoading(false);
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchNews(category, 4);
  }, [category]);

  return (
    <section id="newsSection" className="news-section">
      <section className="inner-section">
        <div className="title">
          <div className="font-satisfy">Lorem</div>
          <h2>
            <span>News and</span> trends
          </h2>

          <select onChange={handleSelect} name="category" id="category">
            <option value="" defaultValue>
              All
            </option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>

        {/* NEWS */}
        <p className={isLoading ? 'loading' : 'loading inactive'}>Loading...</p>
        <div className="container">
          {/* <div className="card shadow-md">
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
          </div> */}

          {news.map((post, index) => {
            return <Card post={post} key={index} />;
          })}
        </div>

        <Link className="btn-grad news-page" to="/news">
          News page
        </Link>
      </section>
    </section>
  );
}

export default NewsSection;
