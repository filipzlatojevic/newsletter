import '../home/NewsSection.scss';
import './News.scss';
import { newsService } from '../../services/newsService';
import { useEffect, useState } from 'react';
import Hero from '../home/Hero';
import Card from '../../components/card/Card';

function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');

  const fetchNews = async (cat, limit) => {
    setIsLoading(true);

    const data = await newsService.getNews(cat, limit);
    if (data.articles) {
      setNews(data?.articles);
    } else {
      const data2 = await newsService.getNews2(cat, limit);
      setNews(data2?.articles);
    }

    setIsLoading(false);
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchNews(category, 12);
  }, [category]);

  return (
    <>
      <main id="news" className="news-section">
        <Hero />
        <section className="inner-section">
          <div className="title">
            <div className="font-satisfy">Lorem</div>
            <h2>
              <span>News and</span> trends
            </h2>

            <label htmlFor="category">Select category</label>
            <select onChange={handleSelect} name="category" id="category">
              <option value="general" defaultValue>
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

          <p className={isLoading ? 'loading' : 'loading inactive'}>
            Loading...
          </p>
          <div className="container">
            {news?.map((post, index) => {
              return <Card post={post} key={index} />;
            }) ||
              'ERROR 429 - Too Many Requests . You made too many requests within a window of time and have been rate limited. Back off for a while.'}
          </div>
        </section>
      </main>
    </>
  );
}

export default News;
