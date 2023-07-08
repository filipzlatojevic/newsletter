const API_URL = import.meta.env.VITE_API_URL;

const getNews = async (category = '', limit = 10) => {
  try {
    const response = await fetch(
      `${API_URL}&category=${category}&pageSize=${limit}`
    );

    return await response.json();
  } catch (error) {
    console.log('🚀 ~ file: newsService.js ~ line 3 ~ getNews ~ error', error);
    return { status: 500 };
  }
};

const getSingleNew = async id => {
  try {
    const response = await fetch(`${API_URL}&id=${id}`); // this will work if I have API where I can fetch only one post by id

    return await response.json();
  } catch (error) {
    console.log(
      '🚀 ~ file: newsService.js ~ line 16 ~ getSingleNew ~ error',
      error
    );
    return { status: 500 };
  }
};

export const newsService = {
  getNews,
  getSingleNew,
};
