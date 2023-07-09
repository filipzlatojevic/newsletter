// const API_URL = import.meta.env.VITE_API_URL;
// const API_URL2 = import.meta.env.VITE_API_URL2;
// const API_KEY2 = import.meta.env.VITE_API_KEY2;

const API_URL =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=1f8f22f84b7c40189e9f786c864e6ff9';
const API_URL2 = 'https://gnews.io/api/v4/top-headlines';
const API_KEY2 = '3b7b07e47f3146759240906c23201444';

const getNews = async (category = '', limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL}&category=${category}&pageSize=${limit}`
    );

    return await response.json();
  } catch (error) {
    console.log('🚀 ~ file: newsService.js ~ line 5 ~ getNews ~ error', error);
    return { status: 500 };
  }
};

const getNews2 = async (category = 'general', limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL2}?category=${category}&lang=en&max=${limit}&apikey=${API_KEY2}`
    );

    return await response.json();
  } catch (error) {
    console.log(
      '🚀 ~ file: newsService.js ~ line 17 ~ getNews2 ~ error',
      error
    );
    return { status: 500 };
  }
};

export const newsService = {
  getNews,
  getNews2,
};
