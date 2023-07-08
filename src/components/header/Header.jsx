import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import useScrollToHash from '../../hooks/useScrollToHash';
import useClickOutside from '../../hooks/useClickOutside';

function Header() {
  const [top, setIsTop] = useState(true);
  const [mode, setMode] = useState('light');
  const [active, setActive] = useState(false);
  const burgerRef = useRef(null);

  const toggle = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isTop = () => {
    window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
  };

  const toggleNav = () => {
    setActive(prev => (prev === false ? true : false));
  };

  useClickOutside(burgerRef, () => setActive(false));
  useScrollToHash();

  useEffect(() => {
    window.addEventListener('scroll', isTop);
    const body = document.body;

    if (mode === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    return () => {
      window.removeEventListener('scroll', isTop);
    };
  }, [mode]);

  return (
    <header className={top ? '' : 'show'}>
      <div className="container">
        <Link to="/" className="logo">
          asioso
        </Link>

        <nav className={active ? 'active' : ''}>
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#news">Blog</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <button className="theme-container" onClick={toggle}>
          <div className="icon">🌙</div>
          <div className="icon">🔆</div>
          <div
            className="ball"
            style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
          />
        </button>

        <button
          ref={burgerRef}
          onClick={toggleNav}
          className={active ? 'burger active' : 'burger'}>
          <div className="top" />
          <div className="bottom" />
        </button>
      </div>
    </header>
  );
}

export default Header;
