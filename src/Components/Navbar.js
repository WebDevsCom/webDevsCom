import React, { useContext } from 'react';
import { Terminal, Sun, Moon } from 'react-feather';
import { Link, withRouter } from 'react-router-dom';
import ThemeContext from '../context/theme/themeContext';

function Navbar() {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode, toggleTheme } = themeContext;
  const active = window.location.pathname;
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0,
    );
    const anchors = document.querySelectorAll('.navbar-item');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', () => {
        document.querySelector('#navbarBasicExample').classList.remove('is-active');

        document.querySelector('.navbar-burger').classList.remove('is-active');
      });
    });

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <nav
      aria-label="main navigation"
      className="navbar is-fixed-top is-light"
      id="navbar"
      role="navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" id="brand" to="/">
          <Terminal color="blue" />
          &emsp;WEBDEVSCOM
        </Link>

        <div
          aria-expanded="false"
          aria-label="menu"
          className="navbar-burger burger"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true" />

          <span aria-hidden="true" />

          <span aria-hidden="true" />
        </div>
      </div>

      <div className="navbar-menu" id="navbarBasicExample">
        <div className="navbar-end">
          <Link className={`navbar-item ${active === '/' ? 'is-active' : ''}`} to="/">
            Home
          </Link>

          <Link
            className={`navbar-item ${active.includes('/resources') ? 'is-active' : ''}`}
            to="/resources"
          >
            Resources
          </Link>

          <Link
            className={`navbar-item ${active === '/bookmarked' ? 'is-active' : ''}`}
            to="/bookmarked"
          >
            My BookMarks
          </Link>

          <a
            className="navbar-item"
            href="https://github.com/WebDevsCom/webDevsCom/graphs/contributors"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contributors
          </a>

          <div className="navbar-item" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {isDarkMode ? <Sun color="#00d1b2" /> : <Moon color="#00d1b2" />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
