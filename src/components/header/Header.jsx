import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [top, setIsTop] = useState(true);
  const [mode, setMode] = useState('light');
  const [active, setActive] = useState(false);

  const toggle = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isTop = () => {
    window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
  };

  const toggleNav = () => {
    setActive(prev => (prev === false ? true : false));
  };

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

        <div className="nav-wrapper">
          <nav className={active ? 'active' : ''}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
          </nav>

          <button className="theme-container" onClick={toggle}>
            <div className="icon">🌙</div>
            <div className="icon">🔆</div>
            <div
              className="ball"
              style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
            />
          </button>
        </div>

        <button
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
