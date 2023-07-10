import './NewsSection.scss';
import { newsService } from '../../services/newsService';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function NewsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [width, setWidth] = useState();

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
    // fetchNews(category, 6);
    setWidth(window.innerWidth);
  }, [category]);

  return (
    <section id="newsSection" className="news-section">
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

        <p className={isLoading ? 'loading' : 'loading inactive'}>Loading...</p>

        <Swiper
          className="swiper-container"
          effect={'coverflow'}
          centeredSlides={true}
          spaceBetween={5}
          slidesPerView={width > 768 ? 3 : 1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}>
          {news?.map((post, index) => {
            return (
              <SwiperSlide className="my-swiper-slide" key={index}>
                <Card key={index} post={post} />
              </SwiperSlide>
            );
          }) ||
            'ERROR 429 - Too Many Requests . You made too many requests within a window of time and have been rate limited. Back off for a while.'}
        </Swiper>

        <Link className="btn-grad news-page" to="/news">
          ALL NEWS
        </Link>
      </section>
    </section>
  );
}

export default NewsSection;
