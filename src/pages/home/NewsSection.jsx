import './NewsSection.scss';
import { newsService } from '../../services/newsService';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';

function NewsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  const fetchNews = async (category, limit) => {
    const data = await newsService.getNews(category, limit);
    setNews(data.articles);
  };

  useEffect(() => {
    fetchNews('', 4);
    setIsLoading(false);
  }, []);

  return (
    <section id="news" className="news-section">
      <section className="inner-section">
        <div className="title">
          <div className="font-satisfy">Lorem</div>
          <h2>
            <span>News and</span> trends
          </h2>
        </div>

        {/* NEWS */}
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
          {isLoading && <span>Loading...</span>}

          {news.map((post, index) => {
            return <Card post={post} key={index} />;
          })}
        </div>
      </section>
    </section>
  );
}

export default NewsSection;
