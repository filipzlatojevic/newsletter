import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';

const Home = lazy(() => import('./pages/home/Home'));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <div>Not found</div>
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
